---
title: How to tell if a calculation is expensive
category: react
tags: [performance]
dateCreated: 2023-12-21
dateModified:
---

If you want to get more confidence, you can add a console log to measure the time spent in a piece of code:

```javascript
console.time('filter array')
const visibleTodos = getFilteredTodos(todos, filter)
console.timeEnd('filter array')
```

If the overall logged time adds up to a significant amount (say, 1ms or more), it might make sense to memoize that calculation.

Keep in mind that your machine is probably faster than your users' so it's a good idea to test the performance with
an artificial slowdown. For example, Chrome offers a CPU Throttling option for this.

To get the most accurate timings, build your app for production and test it on a device like your users have.
