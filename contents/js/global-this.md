---
title: globalThis
category: javascript
tags: [syntax]
dateCreated: 2023-10-23
dateModified:
---

Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use `window`, `self`, or `frames` - but in Web Workers only `self` will work. In Node.js none of these work, and you must instead use `global`. The `this` keyword could be used inside functions running in non–strict mode, but `this` will be `undefined` in modules and inside functions running in strict mode. You can also use `Function('return this')()`, but environments that disable `eval()`, like CSP in browsers, prevent use of `Function` in this way.

The `globalThis` property provides a standard way of accessing the global `this` value across environments.
