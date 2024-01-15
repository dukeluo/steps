---
title: Do "dependencies" and "devDependencies" matter when using build tools?
category: tool
tags: [npm]
dateCreated: 2023-01-15
dateModified:
---

`npm` is widely used for non Node projects, the differentiation between `dependencies` and `devDependencies` does not
necessarily apply. In many frontend projects, all code served to the browser is compiled by the build tools like
webpack, there are no runtime dependencies. This would mean that there are no dependencies, only `devDependencies` – all
dependencies are included in the build done during development. This is how Vue.js and React specify their dependencies
