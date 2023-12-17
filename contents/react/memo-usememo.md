---
title: React.memo vs. useMemo
category: react
tags: [hook, hoc, performance]
dateCreated: 2023-12-19
dateModified:
---

`React.memo` is a higher-order component that we can use to wrap function components that we do not want to re-render
unless props within them change.

Class components can be restricted from re-rendering when their input props are the same using `PureComponent` or
`shouldComponentUpdate`.

`useMemo` is a React Hook that is used to cache the result of a computationally expensive function between re-renders.
We can use this to ensure that the values within that function are re-computed only when one of its dependencies change.

In summary, `React.memo` is used to optimize the rendering of components, while `useMemo` is used to optimize
the performance of specific function calls within a component.
