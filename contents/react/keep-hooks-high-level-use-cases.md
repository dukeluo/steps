---
title: Keep your custom Hooks focused on concrete high-level use cases
category: react
tags: [hooks]
dateCreated: 2023-12-25
dateModified:
---

Start by choosing your custom Hook's name. If you struggle to pick a clear name, it might mean that your Effect is
too coupled to the rest of your component's logic, and is not yet ready to be extracted.

Ideally, your custom Hook's name should be clear enough that even a person who doesn't write code often could
have a good guess about what your custom Hook does, what it takes, and what it returns:

- `useData(url)`
- `useImpressionLog(eventName, extraData)`
- `useChatRoom(options)`

When you synchronize with an external system, your custom Hook name may be more technical and use jargon specific
to that system. It's good as long as it would be clear to a person familiar with that system:

- `useMediaQuery(query)`
- `useSocket(url)`
- `useIntersectionObserver(ref, options)`

Keep custom Hooks focused on concrete high-level use cases. Avoid creating and using custom "lifecycle" Hooks
that act as alternatives and convenience wrappers for the `useEffect` API itself, custom "lifecycle" Hooks
like `useMount` don't fit well into the React paradigm:

- `useMount(fn)`
- `useEffectOnce(fn)`
- `useUpdateEffect(fn)`
