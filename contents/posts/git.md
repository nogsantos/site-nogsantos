---
slug: 'git'
title: Git comandos básicos
tags:
  - GIT
excerpt: |
  Comandos básicos utilizados no dia a dia
---

## Branchs

### Cópia

Copiar de uma branch localizada num repositório remoto, com o comando, é feito a cópia automaticamente para a branch chamada `design`.

```bash
git checkout -t origin/design
```

### Criar uma nova branch local

```bash
git checkout -b [Nome]
```

### Excluir branch

#### Local

- `-D` Se ela estiver sincronizada com outra.

```bash
git branch -d [Nome]
```

#### Remoto

```bash
git push -d origin design
```

```bash
git push origin :design
```

### Listar branchs

Parâmetros:

- Sem parâmetros somente locais
- `-a` Listar remotas e locais
- `-r` Listar todas as branches remotas

```bash
git branch
```

### Visualizar branch remoto

```bash
git checkout origin/experimental
```

### Criar um branch local à partir de um branch remoto

```bash
git checkout -b experimental origin/experimental
```

### Track mais de um repositório remoto

```bash
git remote add [dir] git@repository.url
```

## Configurações do usuário

```bash
git config --global user.name <nome-do-usuario>
```

```bash
git config --global user.email <email-do@usuario>
```

```bash
git config --global core.editor vim
```

```bash
git config --global merge.tool meld
```

```bash
git config --list
```

## Histórico de modificações

Visualizar quais arquivos foram modificados no `commit`

```bash
git whatchanged
```

Com o parâmetro `p` é possível visualizar quais as linhas que foram modificadas em cada commit do nosso projeto. Obs: também é possível utilizarmos `git log -p`, que imprime também os commits nos quais não houve modificação.

```bash
git whatchanged -p
```

## Rebase

O objetivo do comando `git rebase` é fazer com que a `branch` em que se está tenha um novo `HEAD`, "copiado" de outra `branch`. Ou seja, a base da `branch`, a partir da qual você vai realizar seus `commits`, deverá ser modificada.

Para isso, caso haja `commits` novos na `branch` que terá a base trocada, o Git os coloca em um local temporário e em seguida começa a aplicar a nova base. Após a atualização do `HEAD`, o Git começa a aplicar seus `commits` sobre a nova base.

Uma vez feito o `rebase` temos um histórico mais limpo dos `commits` e podemos usar o comando merge a partir do master para aplicar todas as alterações do `branch` testeRebase.

No processo de rebase, quando há um conflito, temos 3 opções a seguir.

`continue`, `abort` e `skip`

Podemos continuar um rebase a partir do ponto de conflito, abortar o rebase e voltar ao estado original ou pular o conflito para lidar com ele mais para frente.

```bash
git rebase --continue
```

Deve ser utilizado após a resolução manual de conflitos

```bash
git rebase --skip
```

Faz com que suas alterações sejam descartadas;

```bash
git rebase --abort
```

Volta atrás em todo o processo de rebase

## Checkout

Essa notação de dois hífens `--` indica que os parâmetros seguintes serão todos nomes de arquivos,permitindo que restauremos o arquivo design ao estado original.

```bash
git checkout -- design
```

## Reset

O comando `git reset` permite desfazer qualquer número de commits, bastando utilizar o hash do commit que queremos manter como HEAD. Contudo, todos os commits que foram realizados após ele serão descartados, perdendo todas as novas funcionalidades. Por isso, o comando git reset só é recomendado quando desejamos desfazer poucos commits e, principalmente, se esses ainda não tiverem sido enviados a um repositório remoto. Se os commits já foram enviados, há alguma chance dos commits já terem sido adquiridos pelos outros desenvolvedores do projeto, e aí não será possível excluí-los.

```bash
git reset <hash>
# Ex.:
git reset b6c7cc8e3fea9b255b5845e1114588206679f609
```

As alterações são removidas do histórico local de commits e também tanto do index quanto do working directory, permanentemente.

```bash
git reset --hard
```

As alterações são removidas do histórico local de commits, mas não são removidas do index.

```bash
git reset --soft
```

As alterações são removidas do histórico local de commits, do index, mas não do working directory.

```bash
git reset
```

O Git nos fornece um atalho para podermos referênciar o hash dos últimos commits sem a necessidade de descobrir o hash de cada commit.

`HEAD~1`

Ao digitarmos `HEAD~` seguido de um número inteiro `n`, será feita uma referência ao `n-ésimo commit` anterior ao `HEAD`. Por exemplo, `HEAD~1`, faz referência ao penúltimo commit e `HEAD~2`, ao antepenúltimo. No caso específico do penúltimo commit, também pode-se referenciá-lo utilizando o atalho`HEAD^`.

Usando esse comando, descartamos definitivamente as mudanças feitas no último commit.

```bash
git reset --hard HEAD~1
```

```bash
git reset --hard origin/<branch>
```

## Remote

Visualizar os repositorios remotos

```bash
git remote
```

Quando realizar o fork de um repositorio, para manter a referência no clone, adicioná-la

```bash
git remote add [alias] [endereço_do_projeto]
```

Git `fetch` trás a alterações de um repositório remoto.

Após adiciná-lo ao projeto

```bash
git fetch [alias]
```

## .gitconfig

Adicionar atalhos às configurações do git

[Gist](https://gist.github.com/nogsantos/c4dab809dfe95949aaf3bd9f683d2bdc)

## Cherry-pick

Quando desejamos que apenas alguns determinados commits sejam aplicados na outra branch

```bash
git cherry-pick [hash]
```

Ao executar o `cherry-pick`, o commit escolhido é copiado. Contudo, existe uma opção que permite não gerar este commit, fazendo com que as alterações sejam adicionadas ao index.

A opção `-n` ou `--no-commit` permite que recuperemos as alterações de um dado commit sem precisar inseri-lo no histórico local.

> Alguns dos casos mais comuns de uso do git cherry-pick são situações em que um pull request ou a mescla de uma branch será recusada, mas há commits com código aproveitável e necessário. Estes commits precisam ser isolados e importados pra dentro da sua branch atual, com o cuidado de não incluir o restante do código que será descartado.
