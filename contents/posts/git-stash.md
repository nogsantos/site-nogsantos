---
slug: 'git-stash'
title: Git Stash
tags:
  - git
  - stash
  - git-workflow
excerpt: |
  Salvar as alterações de uma branch, sem realizar o commit.
---

Com o comando `git stash` é possível interromper um trabalho não finalizado em uma branch, sem a necessidade de realizar o commit, para retomá-lo posteriormente.

O cenário seria o seguinte:

Você está desenvolvendo em uma branch de trabalho, e no meio do processo, surge a necessidade de fazer o checkout em outra branch e realizar uma correção rápida ou algo semelhante. Seu trabalho atual não foi finalizado e ainda não é candidato a um commit.

Ao tentar mudar de branch sem, de fato fazer o commit das alterações, a master por exemplo, um erro semelhante poderá ocorrer:

```bash
git checkout master
error: Your local changes to the following files would be overwritten by checkout:
    ...
    some-files.some-extension
    ...
Please, commit your changes or stash them before you can switch branches.
Aborting
```

O Git não permite que você volte ao master porque você tem alterações na branch de trabalho, a solução para esse problema pode ser utilizar o `stach`.

**Salve as alterações com o comando `stash`**

```bash
git stash save "Alterações não finalizadas que serão retomadas"
```

Com o `stash` realizado, é possível acessar qualquer branch, ajustar o que for necessário, e após tudo finalizado, retomar o trabalho de onde parou. Para isso, acesse novamente a branch de trabalho e realize o `unstash`:

```bash
git stash pop
```

Tudo deve voltar como estava antes do `stash`.

**Outras possibilidades são**

Você criou uma pilha de `stashes`, ou seja, vários momentos em um branch de trabalho:

- Listar todos os `stashes` salvos

```bash
git stash list
```

- Unstash um específico

```bash
git stash pop "stash@{1}"
```

- O git `stash pop` pode ser dividido em dois momentos:

_Aplicando o último stash:_

```bash
git stash apply
```

_Apagando o último stash_

```bash
git stash drop
```

---

Para outras possibilidades e mais opções, consulte a [documentação](https://git-scm.com/docs/git-stash)
