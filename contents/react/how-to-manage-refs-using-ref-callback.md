---
title: How to manage a list of refs using a ref callback
category: react
tags: [ref]
dateCreated: 2023-12-17
dateModified:
---

Sometimes you might need a `ref` to each item in the list, and you don’t know how many you will have.

One possible way around this is to get a single `ref` to their parent element, and then use DOM manipulation methods
like `querySelectorAll` to find the individual child nodes from it. However, this is brittle and can break if your
DOM structure changes.

Another solution is to pass a function to the `ref` attribute. This is called a ref callback. React will call your
`ref` callback with the DOM node when it's time to set the `ref`, and with `null` when it's time to clear it.
This lets you maintain your own array or a map, and access any `ref` by its index or some kind of ID.

```javascript
<li
  key={cat.id}
  ref={node => {
    const map = getMap();
    if (node) {
      // Add to the Map
      map.set(cat.id, node);
    } else {
      // Remove from the Map
      map.delete(cat.id);
    }
  }}
>
```
