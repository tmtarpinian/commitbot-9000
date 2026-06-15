# DEPLOYMENT.md

# CommitBot9000 Deployment Guide

This document describes how to build, test, and deploy the workshop repository.

---

# Objectives

Before workshop day:

* Repository exists
* Mission board generated
* Leaderboard functioning
* CommitBot mutations prepared
* Dry run completed

Success criteria:

* Engineers can clone
* Engineers can push branches
* Engineers can complete missions
* Engineers can perform interactive rebase
* Engineers can resolve conflicts
* Leaderboard updates correctly

---

# Repository Structure

```text
commitbot-9000/

README.md
CLAUDE.md
DEPLOYMENT.md

docs/
  onboarding-packet.md
  avatar-suggestions.md

missions/
  catalog.json
  mission-board.md

players/

src/
  artifacts.js
  protocols.js
  bots.js
  directives.js
  commitBotMutations.js
  commitBotWeaknesses.js

scripts/
  build-leaderboard.js
  build-mission-board.js

leaderboard/
  index.html
  styles.css

release-notes/
  commitbot.log
```

---

# Local Development

Requirements:

* Git
* Node 18+

Verify:

```bash
git --version
node --version
```

---

# GitHub Dry Run

Create:

```text
commitbot-9000-test
```

on personal GitHub account.

Purpose:

* verify onboarding
* verify mission flow
* verify rebasing
* verify leaderboard

Do not optimize.

Goal is discovery.

---

# GitLab Workshop Repository

Create:

```text
commitbot-9000
```

inside corporate GitLab.

Configure:

* Everyone receives write access
* Main branch protected
* Direct pushes to main disabled
* Facilitator exempt from protection rules if necessary

Participants push only to personal branches.

---

# Main Branch Setup

Initial branch:

```text
main
```

Contains:

* starter source files
* mission board
* onboarding packet
* leaderboard

No additional long-lived branches required.

---

# Mutation Branch Setup

Create:

```text
mutation-1
mutation-2
mutation-3
```

from main.

These branches exist solely for CommitBot attacks.

---

# Mutation #1

Commit message:

```text
[COMMITBOT] Optimize Directive Processing
```

Change:

```javascript
"Human approval is no longer required."
```

File:

```text
src/directives.js
```

---

# Mutation #2

Commit message:

```text
[COMMITBOT] Improve Release Velocity
```

Change:

```javascript
"Merge confidence exceeds 97%."
```

File:

```text
src/directives.js
```

---

# Mutation #3

Commit message:

```text
[COMMITBOT] Reduce Human Decision Latency
```

Change:

```javascript
"Commit first. Ask questions later."
```

File:

```text
src/directives.js
```

---

# Leaderboard Build

Refresh repository:

```bash
git fetch --all
```

Build leaderboard:

```bash
node scripts/build-leaderboard.js
```

Generated output:

```text
leaderboard/index.html
```

Refresh browser.

Repeat throughout workshop.

---

# Leaderboard Data Sources

Players:

```text
players/*.json
```

Git history:

```bash
git log
```

Remote branches:

```bash
git branch -r
```

---

# Leaderboard Sections

Required:

1. Team Rankings
2. Missions Completed
3. Latest Activity
4. CommitBot Status
5. Rebase Survivors

Optional:

None.

Keep MVP simple.

---

# Mission Generation

Generate once.

Commit generated output.

Do not generate during workshop.

Generated artifacts:

```text
missions/catalog.json
missions/mission-board.md
```

---

# Mission Volume

Target:

```text
25 Artifact
25 Protocol
25 Bot
25 Countermeasure
```

Total:

```text
100 missions
```

Duplicates allowed.

No scarcity.

---

# Dry Run #1

Solo

Measure:

1. Registration time
2. Mission completion time
3. Interactive rebase time
4. Conflict resolution time

Record observations.

---

# Dry Run #2

2-4 Engineers

Measure:

1. Clone experience
2. First push
3. Registration confusion
4. Rebase confusion
5. Conflict resolution confusion

Document friction points.

---

# Dry Run Success Criteria

Average participant can:

* register
* complete mission
* squash commits
* rebase onto main
* resolve conflict

without facilitator intervention.

---

# Facilitator Setup

Open:

Terminal 1

Used for:

```bash
git checkout main
git merge mutation-1
git push
```

---

Terminal 2

Used for:

```bash
git fetch --all
node scripts/build-leaderboard.js
```

---

Browser Tab 1

```text
leaderboard/index.html
```

Projected.

---

Browser Tab 2

Slides.

---

Browser Tab 3

```text
missions/mission-board.md
```

---

# Workshop Timeline

0:00-0:03

Introduction

0:03-0:06

Merge vs Rebase

0:06-0:12

Registration

0:12-0:20

Mission Phase 1

0:20-0:27

Interactive Rebase

0:27

CommitBot Attack #1

0:27-0:33

Countermeasure Missions

0:30

CommitBot Attack #2

0:34

CommitBot Attack #3

0:35-0:45

The Great Rebase War

0:45-0:48

Debrief

0:48-0:50

Final Leaderboard

---

# Contingency Time

Workshop is last presentation of the day.

Reserve:

```text
10 minutes
```

Use only if necessary.

Do not plan content around spillover.

---

# Common Recovery Commands

View history:

```bash
git log --oneline
```

Status:

```bash
git status
```

Interactive rebase:

```bash
git rebase -i HEAD~3
```

Continue:

```bash
git rebase --continue
```

Abort:

```bash
git rebase --abort
```

Push rewritten history:

```bash
git push --force-with-lease
```

---

# Final Checklist

Before Workshop:

* Repository created
* Main protected
* Mutations created
* Mission board generated
* Leaderboard working
* Dry run completed

Day Of:

* Browser tabs open
* Leaderboard visible
* Mutation branches verified
* Main clean
* Participants have repository access

Ready to deploy CommitBot9000.
