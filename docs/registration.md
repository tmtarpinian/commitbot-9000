# Registration

Register your user for the leaderboard. Do this by making an initial commit on your branch and pushing it up to remote.

We need something to commit, so add a .txt file to `registrations` directory.
The content of the commit does not matter.
Use your gitlab username as the name of the file:

```bash
/registrations/tmtarpinian.txt
```

add a line of content. it doesn't matter.

Make commit with a message that follows this exact format (include the square brackets):

`[REG-001]+[gitlabUsername]+[team]`


Example:

```bash
[REG-001][tmtarpinian][Neutrality]
```

Push:

```bash
git push -u origin <yourBranchName>
```

2. [Registration](/docs/registration.md)



## Summary

1. create a .txt file in /registrations

2. Commit:

```bash
git add .
git commit -m "[REG-001][tmtarpinian][Neutrality]"
git push
```
You commit message should start with [REG-001], but have your gitlabUserName and Team