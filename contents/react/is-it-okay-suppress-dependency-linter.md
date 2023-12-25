---
title: Is it okay to suppress the dependency linter
category: react
tags: [effect]
dateCreated: 2023-12-25
dateModified:
---

After `useEffectEvent` becomes a stable part of React, you should never suppressing the linter.

The downside of suppressing the linter rule is that React will no longer warn you when your Effect needs to "react" to
a new reactive dependency you've introduced to your code. This leads to bugs.

By suppressing the linter, you "lie" to React about the values your Effect depends on. Consider leveraging `useEffectEvent`
in React where necessary to address specific code reactivity requirements without compromising on code quality and correctness.
