---
title: Adjusting some state when a prop changes
category: react
tags: [state, effect]
dateCreated: 2023-12-21
dateModified:
---

Sometimes, you might want to reset or adjust a part of the state on a prop change, but not all of it.

At first glance, you might think of using Effect like this:

```javascript
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null)
  }, [items])
  // ...
}
```

But this is not ideal, it will cause an extra re-render of the `List` and its child components.

```javascript
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false)
  const [selection, setSelection] = useState(null)

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items)
  if (items !== prevItems) {
    setPrevItems(items)
    setSelection(null)
  }
  // ...
}
```

Storing information from previous renders like this can be hard to understand, but it’s better than updating the same
state in an Effect. In the above example, `setSelection` is called directly during a render. React will re-render
the `List` immediately after it exits with a `return` statement. React has not rendered the `List` children or
updated the DOM yet, so this lets the List children skip rendering the stale selection value.

When you update a component during rendering, React throws away the returned JSX and immediately retries rendering.
To avoid very slow cascading retries, React only lets you update the same component’s state during a render. If you
update another component’s state during a render, you’ll see an error. A condition like `items !== prevItems` is
necessary to avoid loops.

Although this pattern is more efficient than an Effect, most components shouldn’t need it either.

```javascript
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  // ✅ Best: Calculate everything during rendering
  const selection = items.find((item) => item.id === selectedId) ?? null
  // ...
}
```
