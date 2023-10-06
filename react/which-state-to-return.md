---
title: How does React know which state to return?
category: react
tags: [hooks, state]
dateCreated: 2023-10-07
dateModified:
---

The `useState` call does not receive any information about which state variable it refers to. There is no "identifier" that is passed to useState, so how does it know which of the state variables to return?

Instead, to enable their concise syntax, Hooks rely on a stable call order on every render of the same component. This works well in practice because if you follow the rule of only calling Hooks at the top level, Hooks will always be called in the same order. This is also why Hooks must be called unconditionally.

Internally, React holds an array of state pairs for every component. It also maintains the current pair index, which is set to `0` before rendering. Each time you call `useState`, React gives you the next state pair and increments the index.
