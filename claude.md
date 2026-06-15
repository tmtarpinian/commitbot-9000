# CLAUDE.md

## Project

CommitBot9000

An interactive Git rebase workshop designed for 40-60 software engineers.

Workshop title:

The Great Rebase War: Surviving CommitBot9000

---

# Purpose

Teach engineers how and when to use Git rebase in a production software development environment.

This workshop intentionally prioritizes hands-on keyboard time over lecture.

Participants learn by:

* creating commits
* cleaning commit history
* rebasing onto a moving branch
* resolving conflicts
* using force-with-lease

---

# Target Audience

Engineers who already know:

* clone
* branch
* commit
* push
* pull
* merge

Engineers may have little or no experience with:

* interactive rebase
* squash
* reword
* force-with-lease
* conflict resolution during rebase

---

# Learning Objectives

Primary:

1. Interactive Rebase
2. Squashing Commits
3. Rewording Commits
4. Rebasing Onto Main
5. Conflict Resolution
6. Force-With-Lease

Secondary:

1. Cleaner commit history
2. Feature branch maintenance
3. Understanding commit replay

Mention Only:

* dependent branches
* autosquash
* fixup

Do Not Teach:

* rebase --onto
* rebase merges
* cherry-pick
* bisect
* reset

---

# Theme

CommitBot9000 has gained write access to main.

Participants must:

* register
* complete missions
* clean history
* counter CommitBot
* survive rebasing onto main

Tone:

Dilbert + Terminator + Software Engineering + Light Fantasy

Examples:

* MergeGoblin.exe
* HistoryTroll9000
* Fork of Rebasing
* Conflict Wizard
* Rubber Duck of Truth

---

# Repository Philosophy

Keep implementation simple.

Avoid:

* databases
* APIs
* web services
* authentication
* merge requests
* approvals

The workshop should function using only:

* Git
* Node
* Text editor

---

# Branch Strategy

Protected:

main

Participants create:

<gitlab_username>

Examples:

* tsmith
* jdoe
* sarahj

No prefixes.

No nested branch names.

---

# Registration

File:

players/<gitlab_username>.json

Example:

{
"realName": "Trevor Smith",
"team": "Whitewalkers",
"avatar": "Conflict Wizard",
"motto": "May the lease be with you."
}

Commit:

[REG-001] Register Conflict Wizard

Registration counts as a completed objective.

---

# Team Names

Current known teams:

* Grumpy Cat
* CATalyst
* Donut
* Deep Nest
* Vitamin CE
* Lansing Code Trotters
* Infinite Loop
* Mario Brothers
* Illuminati
* Team Neutrality
* The Mighty Ducks
* Fluffy Cows
* Homebrew
* Watchdogs
* Platypus
* Viperware
* Not Bots

Team assignments may be adjusted if inactive teams are not represented.

---

# Mission Philosophy

Duplicates allowed.

No mission claiming.

No mission locking.

No mission validation.

Git history is the source of truth.

The workshop teaches Git, not game mechanics.

---

# Mission Categories

ART
PRO
BOT
CTR

Registration:

REG

Final survival objective:

WAR

---

# Mission Structure

Every mission:

* touches 3 files
* creates 3 commits
* uses interactive rebase
* becomes 1 clean commit

Example history:

artifact
directive
protocol

After cleanup:

[ART-001] Forge Fork of Rebasing

---

# Commit Format

Registration:

[REG-001] Register Conflict Wizard

Mission:

[ART-001] Forge Fork of Rebasing

[PRO-001] Activate Human Approval Workflow

[BOT-001] Deploy MergeGoblin.exe

[CTR-001] Activate Human Code Reviews

Final:

[WAR-001] Survived CommitBot

These commit messages act as the API for the leaderboard.

---

# Interactive Rebase

Teach only:

pick
squash
reword

Command:

git rebase -i HEAD~3

Do not teach:

edit
fixup
exec
autosquash

---

# Force-With-Lease

Allowed.

Explicitly taught.

Command:

git push --force-with-lease

Do not teach:

git push --force

---

# CommitBot Attacks

Three scripted mutations.

All mutations modify:

src/directives.js

Purpose:

Guarantee a single understandable conflict.

Mutation #1

Human approval is no longer required.

Mutation #2

Merge confidence exceeds 97%.

Mutation #3

Commit first. Ask questions later.

---

# Conflict Strategy

One conflict file.

Do not create multi-file conflicts.

The workshop teaches rebasing, not advanced conflict resolution.

Participants should encounter:

<<<<<<< HEAD
...
===

...

> > > > > > >

Expected resolution:

Keep both entries.

Remove markers.

git add .

git rebase --continue

---

# Leaderboard

Read-only.

No writes.

No GitLab integration.

No database.

Generated from:

players/*.json

and

git history

Sections:

1. Team Rankings
2. Missions Completed
3. Latest Activity
4. CommitBot Status
5. Rebase Survivors

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

Leaderboard

Optional:

10-minute spillover if engagement remains high.

---

# Dry Run Goals

Measure:

1. Clone to first push
2. Registration completion
3. Mission completion
4. Interactive rebase completion
5. Conflict resolution time

Keep final conflict limited to directives.js.

---

# Known Risks

1. Git opening an unfamiliar editor
2. Windows-specific Git behavior
3. Credential issues
4. Late arrivals
5. Engineers unfamiliar with force-with-lease

---

# Explicit Non-Goals

Not teaching:

* Git fundamentals
* Merge requests
* Release management
* Cherry-pick
* Reset
* Advanced rebasing

Focus on a single successful rebase experience.
