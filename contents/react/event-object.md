---
title: React event object
category: react
tags: [event]
dateCreated: 2024-03-17
dateModified:
---

React event handlers will receive a React event object. It is also sometimes known as a "synthetic event".

```jsx
<button
  onClick={(e) => {
    console.log(e) // React event object
  }}
/>
```

It conforms to the same standard as the underlying DOM events, but fixes some browser inconsistencies. Some React events
do not map directly to the browser’s native events. If you need the underlying browser event for some reason,
read it from `e.nativeEvent`.

React event objects implement some of the standard Event properties and methods:

- `preventDefault()`: Prevents the default browser action for the event.
- `stopPropagation()`: Stops the event propagation through the React tree.

In rare cases, you might need to catch all events on child elements, even if they stopped propagation. You can do this by
adding `Capture` at the end of the event name. Capture events are useful for code like routers or analytics, but
you probably won’t use them in app code.
