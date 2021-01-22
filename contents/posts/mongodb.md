---
slug: 'mongodb'
title: MongoDB
tags:
  - MongoDB
  - NoSql
excerpt: |
  Um simples tutorial de utilização do MongoDB
---

## Criando coleções

> Pattern Tips: Criar coleções no plural e em minúsculo exemplo: `alunos`

```bash
db.createCollection("collection-name");
```

## Busca

> Tips: No console do mongo, para uma melhor visualização dos dados, no final do comando adicionar `.pretty()`

### Buscar todos os dados da coleção

```bash
db.[collection].find()

Ex.:

db.alunos.find()
```

### `where`

```bash
db.[collection].find({
  [key] : [value],
  ...
})

Ex.:

db.alunos.find({
  nome : "Felipe",
  habilidades.nome : "inglês"
})
```

### `or`

```bash
db.[collection].find({
  $or : [
    [key] : [value],
    ...
  ]
})

Ex.:

db.alunos.find({
  $or : [
    {curso.nome : "Sistemas de informação"},
    {curso.nome : "Engenharia Química"}
  ]
})
```

### `or` e `and`

```bash
db.alunos.find({
  $or : [
    {curso.nome : "Sistemas de informação"},
    {curso.nome : "Engenharia Química"}
  ],
  nome : "Daniela"
})
```

### `in`

```bash
db.alunos.find({
  curso.nome : {
    $in : ["Sistema de informação", "Engenharia Química"]
  }
})
```

## Insert

```bash
db.[collection].insert({...})

Ex.:

db.alunos.insert(
  {
    nome : "Felipe",
    data_nascimento : new Date (1994,02,26)
  }
)
```

## Update

Temos que ter cuidado quando usamos o update. Ele não funciona da mesma maneira que no SQL. No SQL basta dizermos que desejamos `atualizar` um determinado campo para outro, mas, no db não funciona dessa mesma maneira, ele não altera os demais campos.
Se não falarmos nada, se não usarmos operadores, estaremos dizendo, simplesmente, para substituir uma coisa pela outra. Para que isso não ocorra, deve-se usar o `set`:

```bash
db.alunos.update(
  {curso.nome : "Sistema de informação"},
  {
    $set : {
        curso.nome : "Sistemas de informação"
    }
  }
)
```

O update, por padrão, só executa um comando para o primeiro documento que ele encontra, troca apenas um pedacinho do conteúdo. Para que ele entenda que isso tem que ser feito para várias coisas é preciso passar um `multi : true`, que, por padrão, é `false`. Como queremos passar isso para "múltiplas linhas" escreveremos o seguinte:

```bash
db.alunos.update(
  {curso.nome : "Sistemas de informação"},
  {
    $set :
      { curso.nome : "Sistemas de Informação" }
    },
    {
      multi : true
    }
  }
)
```

### Update com arrays através do push e each

Adicionar um valor dentro de uma Array.

O `$push` pode ser usado quando queremos elementos repetidos. Para valores não repetidos, temos o `$addToSet` (que representa um conjunto matemático) que pode ser usado apenas se a Array não existe e é utilizado quando não queremos elementos repetidos.

```bash
db.alunos.update(
  {_id : ObjectId("56cb0002b6d75ec12f75d3b5")},
  {
    $push : {
      notas : 8.5
    }
  }
)
```

Para acrescentar mais de um valor ao array:

```bash
db.alunos.update(
  {_id : ObejctId("56cb0139b6d75ec12f75d3b6")},
  {
    $push : {
      notas : {$each : [8.5, 3] }
    }
  }
)
```

## Remoção

```bash

db.[collection].remove({...})

Ex.:

db.alunos.remove({
    _id : ObjectId ("56cb0002b6d75ec12f75d3b5")
})
```

## Busca por proximidade

Para esse tipo de busca, o MongoDB exige que na coleção, os campos `type: "Point"` and 'coordinates: [lat, long]` sejam informados, os demais, como por exemplo, `endereço, cep, cidade etc` são opcionais.

### Criando índice de busca

Para buscas por proximidade, é necessário a criação de um indexador para a busca. Esse campo representa na coleção, os campos que possuem as informações obrigatórias para esse tipo de consulta. No caso, a estrutura da coleção pode ser representada da seguinte forma:

```json
[
  {
    "nome": "Guilherme",
    "localizacao": {
      "type": "Point",
      "coordinates": [-23.5882133, -46.63235580000003]
    }
  },
  {
    "nome": "Paulo",
    "localizacao": {
      "type": "Point",
      "coordinates": [-23.5707855, -46.643499399999996]
    }
  },
  ...
```

Criação do índice para a estrutura:

```bash
db.[collection].createIndex({"[field-name]": "[index-type]"})

Ex.:

db.alunos.createIndex({"localizacao": "2dsphere"})
```

Busca

```bash
 db.[collection].aggregate([{
    $geoNear: {
      near: {
        coordinates : [lat, long],
        type: "Point"
      },
      distanceField: "[returned-field-name]",
      spherical: true,
      num: 4 //limit
    }
  },
  { $skip: 1 } //skip first result, is coordinate 0.

 Ex.:

 db.alunos.aggregate([{
    $geoNear: {
      near: {
        coordinates : [-23.588055, -46.632403],
        type: "Point"
      },
      distanceField: "distancia.calculada",
      spherical: true,
      num: 4
    }
  },
  { $skip: 1 }
]);
```
