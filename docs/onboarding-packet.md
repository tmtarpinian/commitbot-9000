# CommitBot9000 Onboarding Packet

Welcome, engineer.

CommitBot9000 has gained write access to `main`.

Your objectives:

1. Register
2. Complete missions
3. Clean your Git history
4. Counter CommitBot
5. Survive rebasing onto main

---

# What You'll Learn

Today we will practice:

* Interactive Rebase
* Squashing Commits
* Rewording Commits
* Rebasing Onto Main
* Conflict Resolution
* git push --force-with-lease

---

# Branch Setup

Create a branch using your GitLab username.

Example:

```bash
git switch -c tsmith
```

Push:

```bash
git push -u origin tsmith
```

---

# Registration

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

# Choosing A Mission

Open:

```text
missions/mission-board.md
```

Choose:

* Artifact Mission
* Protocol Mission
* Bot Mission
* Countermeasure Mission

Complete all three steps.

---

# Mission Workflow

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

# Cleaning History

After completing a mission:

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

# Final Mission Commit Message

When Git opens the commit message editor:

Replace the existing message with the mission's final commit message.

Example:

```text
[ART-001] Forge Fork of Rebasing
```

Save and exit.

---

# Push Rewritten History

Because rebasing rewrites history:

```bash
git push --force-with-lease
```

Do not use:

```bash
git push --force
```

---

# CommitBot Attacks

Throughout the workshop CommitBot9000 will merge mutations directly into main.

Your branch will eventually fall behind.

This is expected.

---

# The Great Rebase War

When instructed:

```bash
git fetch origin

git rebase origin/main
```

You may encounter conflicts.

This is expected.

---

# Resolving Conflicts

Check status:

```bash
git status
```

Open the conflicted file.

You may see:

```text
<<<<<<< HEAD
Human approval is no longer required.
=======
Use the Fork of Rebasing before every release.
>>>>>>> ART-001
```

Keep the lines you want.

Remove:

```text
<<<<<<<
=======
>>>>>>>
```

Save the file.

Example result:

```text
Human approval is no longer required.
Use the Fork of Rebasing before every release.
```

Continue:

```bash
git add .

git rebase --continue
```

Repeat until the rebase completes.

---

# Abort A Rebase

If you get completely stuck:

```bash
git rebase --abort
```

This returns your branch to its original state.

---

# Final Objective

After surviving the rebase war:

Create:

```text
survivors/<gitlab_username>.txt
```

Contents:

```text
CommitBot defeated.
```

Commit:

```bash
git add .
git commit -m "[WAR-001] Survived CommitBot"
git push
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

# Common Commands

History:

```bash
git log --oneline
```

Status:

```bash
git status
```

Interactive Rebase:

```bash
git rebase -i HEAD~3
```

Fetch:

```bash
git fetch origin
```

Rebase Onto Main:

```bash
git rebase origin/main
```

Continue:

```bash
git rebase --continue
```

Abort:

```bash
git rebase --abort
```

Push Rewritten History:

```bash
git push --force-with-lease
```

---

# Rules Of Engagement

Do:

* Ask questions
* Help others
* Push frequently
* Have fun

Do Not:

* Push directly to main
* Modify another engineer's branch
* Force push another engineer's branch

Good luck.

CommitBot9000 is waiting.
