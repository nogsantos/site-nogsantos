---
slug: 'python-collections-enumerate'
title: PYTHON Enumerar coleções em uma iteração
tags:
  - Programming
  - Python
  - Collections
  - Enumerate
  - Built in
excerpt: |
  Enumere coleções em um iterador
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
