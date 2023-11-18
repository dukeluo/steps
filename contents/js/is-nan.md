---
title: isNaN() vs Number.isNaN()
category: javascript
tags: [number]
dateCreated: 2023-09-14
dateModified:
---

There are two `isNaN()` functions:

- `isNaN()` determines whether a value is `NaN`, first converting the value to a number if necessary.
- `Number.isNaN()` determines whether the passed value is the number value `NaN`.

`isNaN()` can use to test whether an value to is arithmetically processable (usable "like" a number).
And `Number.isNaN()` doesn't attempt to convert the parameter to a number, so non-numbers always return `false`.

```javascript
isNaN(NaN); //true
Number.isNaN(NaN); // true

isNaN(123); // false
Number.isNaN(123); // false

isNaN("123"); // false
Number.isNaN("123"); // false

isNaN("abc"); // true
Number.isNaN("abc"); // false
```
