---
title: Index as a key is an anti-pattern
category: react
tags: [state, key]
dateCreated: 2024-03-17
dateModified:
---

Keys let React uniquely identify an item between its siblings. A well-chosen key provides more information than
the position within the array. Even if the position changes due to reordering, the key lets React identify
the item throughout its lifetime. They help React identify which items have changed, are added, or are removed.

- Keys must be unique among siblings, `crypto.randomUUID()` or `nanoid`. However, it’s okay to use the same keys
for JSX nodes in different arrays.
- Keys must not change or that defeats their purpose! Don’t generate them while rendering.

When no key is provided, React uses the `index` of the item in the array as a fallback key. Moreover, it will warn you
that it is suboptimal. If you explicitly provide the `index` as a key, React assumes that you know what you're doing and
won't show any warnings, it may lead to [some problems](./resetting-state-key.md).
