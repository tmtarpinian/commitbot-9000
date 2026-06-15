# Missions

Complete 3-5 missions.
The goal of these missions is to give you practice rebasing, rewording and squashing commits.
Each mission has the same sequence:

1. follow 3 steps that lead to 3 different commits
2. clean your commit history


## Choosing A Mission


* [Artifact Mission](../missions/artifact-missions.md)
* [Protocol Mission](../missions/protocol-missions.md)
* [Bot Mission](../missions/bot-missions.md)
* [Countermeasure Mission](../missions/countermeasure-missions.md)

Complete at least 1 of each of the 4 mission types. Complete more if time permits.

---

## Mission Rules

* Multiple engineers may complete the same mission.
* Missions may be completed in any order.
* You may switch mission categories at any time.
* The leaderboard is based on Git history, so follow the conventions for commit messages outlined in the missions.

---

## Mission Workflow

Each mission contains:

* Step 1
* Step 2
* Step 3

Commit after every step.

Example:

```bash
git add .
git commit -m "artifact"
```

```bash
git add .
git commit -m "directive"
```

```bash
git add .
git commit -m "protocol"
```

Your history should look similar to:

```text
artifact
directive
protocol
```

This is intentional.

---

## Cleaning History

After "completing a mission":

```bash
git rebase -i HEAD~3
```

You will see something similar to:

```text
pick abc123 artifact
pick def456 directive
pick ghi789 protocol
```

Change it to:

```text
pick abc123 artifact
squash def456 directive
squash ghi789 protocol
```

Save and exit.

---

## Final Mission Commit Message

When Git opens the commit message editor:

Replace the existing message with the mission's final commit message.

Example:

```text
[ART-001][tmtarpinian] Forge Fork of Rebasing
```

Save and exit.

---

## Push Rewritten History

Because rebasing rewrites history:

```bash
git push --force-with-lease
```

Do not use:

```bash
git push --force
```

---


# Editor Notes

Interactive rebase may open an editor on your machine.

Examples:

* VSCode
* IntelliJ
* Vim
* Nano
* Pico

You do not need a specific editor.

If Git opens an editor you do not recognize, ask someone nearby or ask the facilitator.

This workshop is about Git, not editor mastery.

---