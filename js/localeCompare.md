---
title: String.prototype.localeCompare()
category: javascript
tags: [string]
dateCreated: 2023-09-15
dateModified:
---

The `localeCompare()` method of `String` values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.

```javascript
"a".localeCompare("c"); // -1
"orange".localeCompare("apple"); // 1

["orange", "Banana", "cherry", "Apple"].sort((a, b) =>
  a.localeCompare(b, "en", { sensitivity: "base" })
); // [ 'Apple', 'Banana', 'cherry', 'orange' ]
```
