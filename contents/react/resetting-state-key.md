---
title: Resetting state with a key
category: react
tags: [state]
dateCreated: 2023-12-17
dateModified:
---

By default, React preserves state of a component while it stays at the same position. Usually, this is exactly
what you want, so it makes sense as the default behavior. But sometimes, you may want to reset a component’s state.

You can achieve this by adding a `key` for this component. By default, React uses order within the parent to
discern between components. But keys let you tell React to use the `key` itself as part of the position,
instead of their order within the parent.

Note that keys are not globally unique. They only specify the position within the parent.
