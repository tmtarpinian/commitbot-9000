const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const XP_RULES = [
  { prefix: "REG", xp: 10 },
  { prefix: "ART", xp: 20 },
  { prefix: "PRO", xp: 20 },
  { prefix: "BOT", xp: 20 },
  { prefix: "CTR", xp: 20 },
  { prefix: "WAR", xp: 50 }
];

function getGitHistory() {
  const output = execSync(
    'git log --all --date-order --pretty=format:"%H|%ct|%s"',
    { encoding: "utf8" }
  );

  return output
    .split("\n")
    .filter(Boolean)
    .map(line => {
      const [hash, timestamp, subject] = line.split("|");

      return {
        hash,
        timestamp: Number(timestamp),
        subject
      };
    });
}

function initializePlayerScores(commits) {

  const players = {};

  for (const commit of commits) {

    const registration = parseRegistration(
      commit.subject
    );

    if (!registration) {
      continue;
    }

    if (players[registration.username]) {
      continue;
    }

    players[registration.username] = {
      username: registration.username,
      team: registration.team,

      xp: 0,
      registrations: 0,
      missionsCompleted: 0,
      survivor: false,

      completedMissionIds: new Set()
    };
  }

  return players;
}

function xpForCategory(category) {
  const rule = XP_RULES.find(
    rule => rule.prefix === category
  );

  return rule ? rule.xp : 0;
}

function parseMission(subject) {
  const match = subject.match(
    /^\[(REG|ART|PRO|BOT|CTR|WAR)-(\d+)\]\[([^\]]+)\]/
  );

  if (!match) {
    return null;
  }

  return {
    category: match[1],
    missionNumber: match[2],
    missionId: `${match[1]}-${match[2]}`,
    username: match[3]
  };
}

function buildScores(commits) {
  const scoreboard = initializePlayerScores(commits);

  for (const commit of commits) {
    const mission = parseMission(commit.subject);

    if (!mission) {
      continue;
    }

    const player = scoreboard[mission.username];

    if (!player) {
      continue;
    }

    if (player.completedMissionIds.has(mission.missionId)) {
      continue;
    }

    player.completedMissionIds.add(mission.missionId);

    player.xp += xpForCategory(mission.category);

    if (mission.category !== "REG" &&
        mission.category !== "WAR") {
      player.missionsCompleted += 1;
    }

    if (mission.category === "REG") {
      player.registrations += 1;
    }

    if (mission.category === "WAR") {
      player.survivor = true;
    }
  }

  return scoreboard;
}

function buildTeamRankings(scoreboard) {
  const teams = {};

  for (const player of Object.values(scoreboard)) {
    if (!teams[player.team]) {
      teams[player.team] = {
        team: player.team,
        xp: 0,
        members: 0
      };
    }

    teams[player.team].xp += player.xp;
    teams[player.team].members += 1;
  }

  return Object.values(teams)
    .sort((a, b) => {
     if (b.xp !== a.xp) {
      return b.xp - a.xp;
      }

    return a.team.localeCompare(b.team);
  });
}

function buildPlayerRankings(scoreboard) {
  return Object.values(scoreboard)
    .sort((a, b) => {
      if (b.xp !== a.xp) {
        return b.xp - a.xp;
      }

      return a.username.localeCompare(b.username);
    });
}

function buildCommitBotStatus(commits) {
  const mutations = commits.filter(
    commit => commit.subject.startsWith("[COMMITBOT]")
  );

  const count = mutations.length;

  let threatLevel = "DORMANT";

  if (count === 1) {
    threatLevel = "ACTIVE";
  } else if (count === 2) {
    threatLevel = "DANGEROUS";
  } else if (count >= 3) {
    threatLevel = "CRITICAL";
  }

  return {
    mutationsReleased: count,
    threatLevel
  };
}

function buildSurvivors(scoreboard) {
  return Object.values(scoreboard)
    .filter(player => player.survivor)
    .sort((a, b) => {
      if (b.xp !== a.xp) {
        return b.xp - a.xp;
      }

      return a.username.localeCompare(b.username);
    });
}

function parseRegistration(subject) {

  const match = subject.match(
    /^\[REG-\d+\]\[([^\]]+)\]\[([^\]]+)\]/
  );

  if (!match) {
    return null;
  }

  return {
    username: match[1],
    team: match[2]
  };
}

function formatTimestamp(epochSeconds) {
  const date = new Date(epochSeconds * 1000);

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function buildActivityFeed(commits) {
  const activity = [];

  const sorted = [...commits]
    .sort((a, b) => b.timestamp - a.timestamp);

  for (const commit of sorted) {

    const time = formatTimestamp(commit.timestamp);

    const mission = parseMission(commit.subject);

    if (mission) {

      if (mission.category === "WAR") {
        activity.push({
          timestamp: time,
          message: `${mission.username} survived CommitBot`
        });
      } else {
        activity.push({
          timestamp: time,
          message: `${mission.username} completed ${mission.missionId}`
        });
      }

      continue;
    }

    if (commit.subject.startsWith("[COMMITBOT]")) {
      activity.push({
        timestamp: time,
        message: "☠ COMMITBOT deployed mutation"
      });
    }
  }

  return activity.slice(0, 30);
}

function generateHtml({
  generatedAt,
  commitBot,
  teams,
  players,
  activity,
  survivors
}) {

  const teamRows = teams
    .map((team, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.xp}</td>
      </tr>
    `)
    .join("");

  const playerRows = players
    .map((player, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${player.username}</td>
        <td>${player.team}</td>
        <td>${player.xp}</td>
        <td>${player.missionsCompleted}</td>
      </tr>
    `)
    .join("");

  const survivorRows = survivors.length
    ? survivors
        .map(player => `<li>${player.username}</li>`)
        .join("")
    : "<li>No survivors yet</li>";

  const activityRows = activity
    .map(item => `
      <li>
        <span class="activity-time">${item.timestamp}</span>
        <span class="activity-message">${item.message}</span>
      </li>
    `)
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>CommitBot9000 Status Console</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>

  <div class="page">

    <div class="main-column">

      <header>

        <div>
          <h1>🤖 CommitBot9000 Status Console</h1>
          <div class="subtitle">
            The Great Rebase War
          </div>
        </div>

        <div class="generated-at">
          <div>Last Updated</div>
          <div>${generatedAt}</div>
        </div>

      </header>

      <section class="status-panel">

        <h2>CommitBot Status</h2>

        <div class="status-grid">

          <div>
            <div class="status-label">
              Threat Level
            </div>

            <div class="status-value">
              ${commitBot.threatLevel}
            </div>
          </div>

          <div>
            <div class="status-label">
              Mutations Released
            </div>

            <div class="status-value">
              ${Math.min(commitBot.mutationsReleased, 3)} / 3
            </div>
          </div>

          <div>
            <div class="status-label">
              Registered Engineers
            </div>

            <div class="status-value">
              ${players.length}
            </div>
          </div>

        </div>

      </section>

      <section>

        <h2>Team Rankings</h2>

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>XP</th>
            </tr>
          </thead>

          <tbody>
            ${teamRows}
          </tbody>

        </table>

      </section>

      <section>

        <h2>Missions Completed</h2>

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Engineer</th>
              <th>Team</th>
              <th>XP</th>
              <th>Missions</th>
            </tr>
          </thead>

          <tbody>
            ${playerRows}
          </tbody>

        </table>

      </section>

    </div>

    <aside class="activity-column">

      <div class="activity-header">
        LATEST ACTIVITY
      </div>

      <ul class="activity-feed">
        ${activityRows}
      </ul>

    </aside>

  </div>

</body>


</html>
<script>
  setInterval(() => {
    location.reload();
  }, 10000);
</script>
`;
}

 function main() {

  const commits = getGitHistory();

  const scoreboard = buildScores(
    commits
  );

  const html = generateHtml({
    generatedAt: new Date().toLocaleString(),
    commitBot: buildCommitBotStatus(commits),
    teams: buildTeamRankings(scoreboard),
    players: buildPlayerRankings(scoreboard),
    activity: buildActivityFeed(commits),
    survivors: buildSurvivors(scoreboard)
  });

  const leaderboardDir = path.join(
    __dirname,
    "..",
    "leaderboard"
  );

  const outputFile = path.join(
    leaderboardDir,
    "index.html"
  );

  fs.mkdirSync(leaderboardDir, {
    recursive: true
  });

  fs.writeFileSync(outputFile, html);

  console.log(`
Leaderboard generated

Players: ${Object.keys(scoreboard).length}
Commits: ${commits.length}
Teams: ${buildTeamRankings(scoreboard).length}
`);
}

main();