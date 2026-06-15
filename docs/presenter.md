# Presentation Timeline

# Presenter Timeline

## T-15 Minutes

* Verify GitLab/GitHub access
* Verify leaderboard refresh script running
* Verify browser auto-refresh working
* Open leaderboard on projector
* Open facilitator notes
* Open terminal for CommitBot mutations

---

## 0:00 - Introduction

* Introduce CommitBot9000
* Explain objective: survive the Great Rebase War
* Explain teams
* Explain leaderboard
* Explain scoring
* Explain winner determination

---

## 0:03 - Git Concepts

* Branches
* Commits
* Push
* Fetch
* Rebase
* Force-with-lease

Emphasize:

* We will prefer rebase over merge
* We want clean linear history
* Conflicts are expected
* Conflicts are the objective

---

## 0:08 - Workshop Setup

* Clone repository
* Create branch named GitLab username
* Open onboarding guide
* Open mission board

Example:

git switch -c tmtarpinian

git push -u origin tmtarpinian

---

## 0:10 - Registration Mission

* Complete REG-001
* Commit registration
* Push branch

Commit format:

[REG-001][username][team]

Example:

[REG-001][tmtarpinian][Neutrality]

Verify leaderboard updates

---

## 0:15 - Begin Missions

* Start ART / PRO / BOT / CTR missions
* Encourage frequent commits
* Encourage frequent pushes
* Remind participants to follow commit format

---

## 0:20 - Rebase Discussion

Pause briefly

Explain:

* fetch
* rebase
* force-with-lease

Demonstrate:

git fetch

git rebase origin/main

git push --force-with-lease

Explain why rebase is preferred over merge

Show clean history example

Show messy merge history example

Resume workshop

---

## 0:25 - CommitBot Mutation #1

Merge facilitator mutation

Refresh leaderboard

Discuss resulting conflict

Assist engineers

---

## 0:30 - Continue Missions

* Encourage collaboration
* Encourage pairing if blocked
* Encourage leaderboard competition

---

## 0:35 - CommitBot Mutation #2

Merge facilitator mutation

Refresh leaderboard

Discuss conflict resolution strategies

---

## 0:40 - Final Push

* Encourage completion of remaining missions
* Encourage WAR mission preparation
* Remind participants to push frequently

---

## 0:45 - CommitBot Mutation #3

Merge final mutation

Refresh leaderboard

Declare CommitBot CRITICAL

WAR mission becomes available

---

## 0:45 - 0:55

* WAR mission
* Final rebases
* Final pushes
* Final conflict resolution

---

## 0:55 - Scoring Freeze

* Final leaderboard refresh
* Stop accepting pushes
* Review standings

---

## 0:57 - Debrief

Ask:

* What caused conflicts?
* What made rebasing difficult?
* Why force-with-lease instead of force?
* When would merge be preferable?
* What workflows will you use differently?

---

## 1:00 - Awards

* Winning team
* Top engineer
* CommitBot survivors

If engagement remains high:

* Allow 5-10 minute spillover
* Open Q&A
* Demonstrate additional Git history examples
