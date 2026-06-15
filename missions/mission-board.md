# Mission Board

Welcome, engineer.

CommitBot9000 has gained write access to `main`.

Your objective is to strengthen the repository before CommitBot takes complete control.

---

# Mission Workflow

Choose any mission from one of the following mission categories:

* Artifact Missions
* Protocol Missions
* Bot Missions
* Countermeasure Missions

Mission Files:

```text
missions/artifact-missions.md
missions/protocol-missions.md
missions/bot-missions.md
missions/countermeasure-missions.md
```

---

# Mission Steps

Every mission follows the same pattern:

1. Add Item #1
2. Commit
3. Add Item #2
4. Commit
5. Add Item #3
6. Commit
7. Squash history
8. Reword commit
9. Push

Example:

```bash
git add .
git commit -m "artifact"

git add .
git commit -m "directive"

git add .
git commit -m "protocol"
```

---

# Clean Your History

After completing a mission:

```bash
git rebase -i HEAD~3
```

Change:

```text
pick
pick
pick
```

to:

```text
pick
squash
squash
```

Save and exit.

When prompted, replace the commit message with the mission's Final Commit.

Example:

```text
[ART-001] Forge Fork of Rebasing
```

Push:

```bash
git push --force-with-lease
```

---

# Registration

Before attempting missions, complete registration.

Create:

```text
players/<gitlab_username>.json
```

Example:

```json
{
  "realName": "Trevor Smith",
  "team": "Whitewalkers",
  "avatar": "Conflict Wizard",
  "motto": "May the lease be with you."
}
```

Commit:

```text
[REG-001] Register Conflict Wizard
```

Push:

```bash
git push
```

---

# Mission Rules

* Duplicates are allowed.
* Multiple engineers may complete the same mission.
* Missions do not need to be claimed.
* Missions may be completed in any order.
* You may switch mission categories at any time.
* The leaderboard is based on Git history.

---

# CommitBot Attacks

Throughout the workshop, CommitBot9000 will introduce mutations into `main`.

These changes are intentional.

Conflicts are expected.

Your branch will eventually fall behind.

When instructed:

```bash
git fetch origin
git rebase origin/main
```

Resolve conflicts.

Continue rebasing.

Push:

```bash
git push --force-with-lease
```

---

# Survival Objective

After successfully rebasing onto the latest version of `main`, create:

```text
survivors/<gitlab_username>.txt
```

Contents:

```text
CommitBot defeated.
```

Commit:

```text
[WAR-001] Survived CommitBot
```

Push:

```bash
git push
```

---

# Suggested Progression

If this is your first mission:

1. Complete Registration
2. Complete one Artifact Mission
3. Perform Interactive Rebase
4. Complete one Countermeasure Mission
5. Survive CommitBot

If you finish early:

* Complete additional missions
* Help another engineer
* Strengthen your team's position on the leaderboard

Good luck.

Humanity is counting on you.
CommitBot9000 is not.
