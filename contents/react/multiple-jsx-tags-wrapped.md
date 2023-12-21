---
title: Why do multiple JSX tags need to be wrapped
category: react
tags: [jsx]
dateCreated: 2023-09-23
dateModified:
---

If you want to return multiple elements from a component in React, you need to wrap them with a single parent tag
or `<></>` also known as a Fragment.

This is because JSX is transformed into plain JavaScript objects, and you can’t return two objects from a function
without wrapping them into an array. Therefore, you also can’t return two JSX tags without wrapping them into
another tag or a Fragment.
