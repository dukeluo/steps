---
title: Capture phase events
category: react
tags: [event]
dateCreated: 2023-09-23
dateModified:
---

In rare cases, you might need to catch all events on child elements, even if they stopped propagation. For example,
maybe you want to log every click to analytics, regardless of the propagation logic. You can do this by adding `Capture`
at the end of the event name:

```javascript
<div
  onClickCapture={() => {
    /* this runs first */
  }}
>
  <button onClick={(e) => e.stopPropagation()} />
  <button onClick={(e) => e.stopPropagation()} />
</div>
```

Each event propagates in three phases:

1. It travels down, calling all `onClickCapture` handlers.
2. It runs the clicked element’s `onClick` handler.
3. It travels upwards, calling all `onClick` handlers.

Capture events are useful for code like routers or analytics, but you probably won’t use them in app code.
