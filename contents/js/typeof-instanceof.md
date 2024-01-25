---
title: typeof vs instanceof
category: javascript
tags: [operator]
dateCreated: 2024-01-25
dateModified:
---

Use `typeof` for primitive data types:

```javascript
'example string' instanceof String // false
typeof 'example string' === 'string' // true

true instanceof Boolean // false
typeof true === 'boolean' // true

99.99 instanceof Number // false
typeof 99.99 === 'number' // true
```

Use `instanceof` for custom data types:

```javascript
const ClassFirst = function () {}
const ClassSecond = function () {}

const instance = new ClassFirst()

typeof instance === 'ClassFirst' // false
typeof instance // 'object'

instance instanceof ClassFirst // true
instance instanceof ClassSecond // false
```
