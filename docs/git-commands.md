# Common Git Commands

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


## Resolving Conflicts

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