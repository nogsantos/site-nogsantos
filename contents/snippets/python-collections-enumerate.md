---
slug: 'python-collections-enumerate'
title: 'Python: Enumerar coleções em uma iteração'
tags:
  - Programming
  - Python
  - Python3
  - Collections
  - Enumerate
  - Built in
excerpt: |
  Como enumerar coleções em um iterador no python
---

Ao invés de utilizar o modo tradicional, utilizando a variável `count`. O Python possui um método built in, que além de facilitar o trabalho, oferece outras possibilidades, como informar o valor de inicio do contador.

```python
names = ['Peter park', 'Clark Kent', 'Wade Wilson']

for index, name in enumerate(names, start=3):
    print(index, name)

# saída

3 Peter park
4 Clark Kent
5 Wade Wilson
```
