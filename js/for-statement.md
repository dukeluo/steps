---
title: for statement with multiple loop counters
category: javascript
tags: [syntax]
dateCreated: 2023-09-21
dateModified:
---

A `for` statement looks as follows:

```javascript
for (initialization; condition; afterthought)
  statement
```

The initializing expression can initialize multiple loop counters, so we can do like this when we have more:
```javascript
for (let left = 0, right = s1.length; right < s2.length; left++, right++) {
}
```
