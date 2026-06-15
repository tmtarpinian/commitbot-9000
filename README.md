# README.md

# CommitBot9000

CommitBot9000 has gained write access to `main`.

The engineering organization has authorized emergency intervention.

Your objectives:

1. Register your engineer
2. Complete missions
3. Clean your commit history
4. Counter CommitBot
5. Survive rebasing onto main

---

## Start Here

Read:

```text
docs/onboarding-packet.md
```

Everything needed for the workshop is documented there.

---

## Quick Start

Create a branch using your GitLab username:

```bash
git switch -c <gitlab_username>
```

Example:

```bash
git switch -c tsmith
```

Push:

```bash
git push -u origin tsmith
```

---

## Registration

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

```bash
git add .
git commit -m "[REG-001] Register Conflict Wizard"
git push
```

---

## Missions

Mission board:

```text
missions/mission-board.md
```

Choose any mission.

Complete all three steps.

Commit after each step.

Then clean your history using:

```bash
git rebase -i HEAD~3
```

---

## CommitBot

CommitBot9000 will introduce mutations into `main` throughout the workshop.

These mutations are intentional.

Conflicts are expected.

Panic is optional.

---

## Leaderboard

The facilitator will project a live leaderboard throughout the workshop.

Tracked categories:

* Team Rankings
* Missions Completed
* Latest Activity
* CommitBot Status
* Rebase Survivors

---

## Rules

Do:

* Create your own branch
* Push frequently
* Ask questions
* Help others

Do Not:

* Push directly to main
* Modify another engineer's branch
* Force push another engineer's branch

---

## Victory Condition

When instructed:

```bash
git fetch origin

git rebase origin/main
```

Resolve conflicts.

Push using:

```bash
git push --force-with-lease
```

Then complete:

```text
[WAR-001] Survived CommitBot
```

If your branch survives the rebase war, you win.

Good luck, engineer.
