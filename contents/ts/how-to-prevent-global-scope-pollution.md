---
title: How to prevent global scope pollution
category: typescript
tags: [module]
dateCreated: 2024-01-16
dateModified:
---

In TypeScript, just as in ECMAScript 2015, any file containing a top-level `import` or `export` is considered a module.

Conversely, a file without any top-level `import` or `export` declarations is treated as a script whose contents are
available in the global scope.

So you will get the `Duplicate identifier 'TreeNode'` error since there are two class `TreeNode` in the global scope now.

```typescript
// File 1: file-1.ts
class TreeNode {
  // definition
}

// File 2: file-2.ts
class TreeNode {
  // definition
}
```

There are two ways to prevent this global scope pollution:

- Using the `export {}` syntax at the end of each file. This syntax effectively marks the file as a module.
- Setting the compiler option `module` as `NodeNext`.
