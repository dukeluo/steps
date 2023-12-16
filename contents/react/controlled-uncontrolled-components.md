---
title: Controlled and uncontrolled components
category: react
tags: [state]
dateCreated: 2023-12-16
dateModified:
---

It is common to call a component with some local state "uncontrolled". In contrast, you might say a component
is "controlled" when the important information in it is driven by props rather than its own local state.
This lets the parent component fully specify its behavior.

Uncontrolled components are easier to use within their parents because they require less configuration.
But they're less flexible when you want to coordinate them together. Controlled components are
maximally flexible, but they require the parent components to fully configure them with props.

In practice, "controlled" and "uncontrolled" aren’t strict technical terms — each component usually has
some mix of both local state and props.

When writing a component, consider which information in it should be controlled (via props), and which
information should be uncontrolled (via state). But you can always change your mind and refactor later.
