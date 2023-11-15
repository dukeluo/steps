---
title: Avoid creating holes in arrays
category: javascript
tags: [array]
dateCreated: 2023-09-25
dateModified:
---

When working with arrays, it's important to avoid creating holes. The difference in performance between holey or packed arrays is usually negligible. However, if optimizing code for performance is crucial, keeping arrays in packed-elements mode can be beneficial.

To prevent creating holes, it's recommended to initialize arrays using literals instead of the new `Array()` constructor. If you don't know all the values ahead of time, start by creating an empty array and later push the values to it. This ensures that the array remains packed and doesn't transition to a holey elements kind.

```javascript
// using literals
const array = ["a", "b", "c"]; // elements kind: PACKED_ELEMENTS

// creating an empty array and later put the values
const array = [];
array.push(someValue);
array.push(someOtherValue);
```

By following this approach, you allow V8 to potentially generate optimized code that is faster for operations performed on the array.
