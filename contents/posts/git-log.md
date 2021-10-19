---
slug: 'git log'
title: Git logs
tags:
  - GIT
  - LOGS
  - Document
excerpt: |
  Gerar e manter o histórico do código com o git log.
---

A documentação do projeto, mantendo um padrão e um bom histórico das mensagens de commit, pode ser gerada com o comando `git log`. Arquivo de mudanças `CHANGELOG`, ou as notas de release `RELEASE NOTES`, podem facilitar bastante a manutenção e rastreabilidade no código.

O subcomando `log` do `git` mostra todos os commits em um repositório e é uma ferramenta útil para inspecionar o histórico de um projeto. Sua saída pode gerar documentação do projeto, como notas de versão e registros de mudanças. Definir mensagens de commits claras e significativas, pode ser uma ferramenta poderosa no kit de ferramentas de documentação do projeto.

Um bom histórico de commits pode ser alcançado utilizando boas práticas como as descritas no modelo [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/) que propõe um conjunto de regras para criar um histórico de commits explícito, facilitando a criação ou utilização de ferramentas automatizadas com esse propósito.

## Gerando notas alterações ou releases

É possível gerar informando as tags que serão filtradas

```bash
git log --oneline v0.1.0...v0.1.1
```

As saídas dos comandos podem ser redirecionadas para um arquivo, como no exemplo:

```bash
git log --oneline v0.1.0...v0.1.1 >> CHANGELOG # OR RELEASE_NOTES
```

> O arquivo definido na saída do comando, pode ser versionado ou utilizado em alguma ferramenta que apresente aos usuários o que foi alterado no último release do sistema.

A flag de formatação `--online` define que queremos uma versão condensada de cada commit, um commit por linha.

```bash
13abc49 docs(about): improves about page infos
9f4c7c3 ci(fix): adjustments on deploy stages
caf2d83 build(migration): migrates site to firebase
070da73 refactor(content): It centralizes the way to load content
4ef6b8d test(dynamics): Fix tests
cfd6bd5 fix(project): Fix SEO and improve fetch
2ee58e5 ci(workflow): Update ci
0d29391 ci(actions): Fix environment var names
7648d85 build(nuxt): Update project dependencies
...
```

**Customizando o output do log**

Para definir quais serão os valores informados no log, adequando às necessidades do projeto, é possível utilizar a flag `--format`.

```bash
git log --format=">> %h %s"
```

Nesse exemplo, removendo o hash na saída. Mais opções de filtros, podem ser encontradas na documentação no tópico [PRETTY FORMATS](https://www.git-scm.com/docs/git-log#_pretty_formats)

```bash
>> ci(scp): removes scp deploy task
>> docs(about): improves about page infos
>> ci(fix): adjustments on deploy stages
>> build(migration): migrates site to firebase
>> refactor(content): It centralizes the way to load content
>> test(dynamics): Fix tests
>> fix(project): Fix SEO and improve fetch
>> ci(workflow): Update ci
>> ci(actions): Fix environment var names
>> build(nuxt): Update project dependencies
...
```

## Shortlog

O comando `shortlog` é especialmente útil ao gerar notas de versão para projetos com muitos colaboradores. É possível gerar uma saída com os commits agrupados por autor e classificados por nome.

Juntamente com o `--format`, informando a flag `-n` é possível visualizar a quantidade de commits por autor.

O comando:

```bash
git shortlog -n --format="%s" 3.2.7...3.2.8
```

Produz a saída:

```bash
Mariusz Felisiak (7):
      [3.2.x] Post-release version bump.
      [3.2.x] Added stub release notes for Django 3.2.8.
      [3.2.x] Fixed #33082 -- Fixed CommandTests.test_subparser_invalid_option on Python 3.9.7+.
      [3.2.x] Corrected outputs and made cosmetic edits in GeoDjango tutorial.
      [3.2.x] Used :rfc: role in docs/topics/conditional-view-processing.txt.
      [3.2.x] Fixed broken links and redirects in docs.
      [3.2.x] Corrected field and model check messages in docs.

Carlton Gibson (3):
      [3.2.x] Fixed #33083 -- Fixed selecting all items in the admin changelist when actions are both top and bottom.
      [3.2.x] Added release date for 3.2.7.
      [3.2.x] Bumped version for 3.2.8 release.

Adam Johnson (1):
      [3.2.x] Refs #31055 -- Doc'd 'databases' argument of check functions.

Claude Paroz (1):
      [3.2.x] Removed obsolete GEOS 3.5 requirement note.

David Sanders (1):
      [3.2.x] Clarified type of Window()'s partition_by and order_by arguments.

David Smith (1):
      [3.2.x] Doc'd Jinja2 form renderer.

Jacob Walls (1):
      [3.2.x] Fixed typo in docs/topics/i18n/formatting.txt.

Ken Whitesell (1):
      [3.2.x] Fixed #33077 -- Fixed links to related models for admin's readonly fields in custom admin site.

Sarah Abderemane (1):
      [3.2.x] Refs #27694 -- Doc'd lookups that can be chained with HStoreField key transforms.

Steven Maude (1):
      [3.2.x] Fixed typo in docs/intro/reusable-apps.txt.
```


### Referências

- https://www.git-scm.com/docs/git-log
- https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/
- https://github.com/django/django/
