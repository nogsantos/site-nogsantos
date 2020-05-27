---
slug: 'git-tricks'
title: Git Tricks Cheat sheet
tags:
  - Git
  - Developer
  - Tools
excerpt: |
  Git Tricks Cheat sheet, usual git commands and some tricks.
---

#### amend

When forget to commit a file, or leave a trash comment in. Is not necessary create a new revision, it is possible to add or modify and reuse the last commit.

##### Add the files

```bash
git add [file or .] 
```

##### Commit

```bash
git commit --amend --reuse-message HEAD 
```

#### cherry-pick

To apply some of commits in current branch.

##### Single

```bash
git cherry-pick <hash>
```

##### List of

```bash
git cherry-pick <first-hash> <second-hash> <third-hash>
```

##### Sequential range of

```bash
git cherry-pick <first-hash>..<last-hash>
```

#### Logs

Get git commit logs.

##### Last commit

View just the last commit on console:

```bash
git log -1
// or
git log -n1
```

##### Number of commits each person has made in the last month

```bash
git shortlog --summary --since='1 month ago'
```

##### List all unmerged branches branches

Get a list of unmerged branch in current branch

~> Local

```bash
git branch --no-merged
```

~> Remote, use ```flag -a```

```bash
git branch -a --no-merged
```
