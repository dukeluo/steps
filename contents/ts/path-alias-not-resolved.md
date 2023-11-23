---
title: Path aliases are not resolved in emitted code
category: typescript
tags: [tsc]
dateCreated: 2023-11-23
dateModified:
---

The `tsc` compiler alone cannot resolve alias paths, so we need to install the additional dev package `tsc-alias`.
`tsc-alias` is for replacing alias paths with relative paths after typescript compilation of `tsc` compiler.

Next, in `package.json`, modify the build script to `"build": "tsc && tsc-alias"`. Running `npm run build` should work
after this and the code should be compiled correctly to javascript.

Probably we'll get the javascript without a file extension in its import statement, just apply
the `--resolve-full-paths` parameter for the `tsc-alias`.
