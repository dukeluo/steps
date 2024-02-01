---
title: IIFE vs Closure
category: javascript
tags: [function]
dateCreated: 2024-02-01
dateModified:
---

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.It is
often used to create a new scope for variables and avoid polluting the global scope.

```javascript
;(function () {
  const message = 'Hello from an IIFE!'

  console.log(message)
})()
```

A closure is the combination of a function bundled together with references to its surrounding state (the lexical
environment). It gives you access to an outer function's scope from an inner function.

```javascript
function outerFunction() {
  const outerVariable = "I'm from the outer function"

  function innerFunction() {
    console.log(outerVariable)
  }

  return innerFunction
}

const closureExample = outerFunction()

closureExample() // I'm from the outer function
```

A example use IIFE and Closure to make a counter.

```html
<script>
  const updateClickCount = (function () {
    const counter = 0

    return function () {
      ++counter
      document.getElementById('spnCount').innerHTML = counter
    }
  })()
</script>

<html>
  <button onclick="updateClickCount()">click me</button>
  <div>you've clicked <span id="spnCount"> 0 </span> times!</div>
</html>
```
