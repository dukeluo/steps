---
title: Assignment vs Shallow copy vs Deep copy
category: javascript
tags: [function]
dateCreated: 2024-02-03
dateModified:
---

Assignment involves directly assigning the reference of an object or array to a new variable. This means that
both the original and new variable point to the same memory location, so changes to one will affect the other.

Shallow copy only duplicates the top-level structure of an object or array, while the inner objects and arrays are
still referenced. This means that if you modify a nested object in the shallow copy, it will also affect the
original object. Shallow copies are faster and more memory-efficient, but they can lead to unexpected behavior when
dealing with nested data structures. It occurs in the following scenarios:

- `Object.assign()`
- `Array.prototype.slice()`
- `Array.prototype.concat()`
- the spread operator `...`

Deep copy creates a completely independent copy of the original object or array, including all nested objects and arrays.
This means that any modifications made to the deep copy will not affect the original object. However, it can be slower
and consume more memory, especially for large and deeply nested data structures. It occurs in the following scenarios:

- `JSON.stringify()`
