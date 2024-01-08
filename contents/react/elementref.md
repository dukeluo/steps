---
title: ElementRef
category: react
tags: [type]
dateCreated: 2024-01-08
dateModified:
---

The `ElementRef` type helper allows you to easily extract the type from the element you're targeting when using
the `useRef` hook. It works with both standard HTML elements and custom components that use `forwardRef`.

```typescript
// standard HTML elements
const Component = () => {
  const audioRef = useRef<ElementRef<'audio'>>()

  return <audio ref={audioRef}>Hello</audio>
}

// custom components
type OtherComponentRef = ElementRef<typeof OtherComponent>

const Component = () => {
  const ref = useRef<OtherComponentRef>()

  return <OtherComponent ref={ref}>Hello</OtherComponent>
}
```
