---
title: for await...of
category: javascript
tags: [syntax]
dateCreated: 2023-11-25
dateModified:
---

The `for await...of` statement creates a loop iterating over async iterable objects as well as sync iterables.

```javascript
function* generator() {
  yield 1
  yield Promise.resolve(2)
  yield 3
}

;(async () => {
  for await (const num of generator()) {
    console.log(num)
  }
})()
// 1, 2, 3

// for-of
for (const numOrPromise of generator()) {
  console.log(numOrPromise)
}
// 1, Promise { 2 }, 3
```
