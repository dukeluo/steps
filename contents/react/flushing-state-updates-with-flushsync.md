---
title: Flushing state updates synchronously with flushSync
category: react
tags: [state]
dateCreated: 2023-12-17
dateModified:
---

In React, state updates are queued. Usually, this is what you want. But sometimes it will be an issue. For example,
you want to always scroll the screen down to the last child of the list when adding a new todo, so you have following codes:

```javascript
function handleAdd() {
  const newTodo = { id: nextId++, text: text }
  setTodos([...todos, newTodo])
  listRef.current.lastChild.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
  })
}
```

But you will find it always scrolls to the todo that was just before the last added one. This is because the time
you scroll the list to its last element, the todo has not yet been added. This is why scrolling always "lags behind"
by one item.

To fix this issue, you can force React to update (“flush”) the DOM synchronously. To do this, import `flushSync`
from `react-dom` and wrap the state update into a `flushSync` call:

```javascript
flushSync(() => {
  setTodos([...todos, newTodo])
})
listRef.current.lastChild.scrollIntoView()
```

This will instruct React to update the DOM synchronously right after the code wrapped in `flushSync` executes.
