---
title: Lexical scope
category: javascript
tags: [scope]
dateCreated: 2024-01-30
dateModified:
---

The lexical scope is the scope of a variable or function based on where it is defined in the source code. The scope
is determined by the placement of variables and functions in the code, and it remains the same throughout the execution
of the program.

```javascript
const a = 2

function foo() {
  console.log(a)
}

function bar() {
  const a = 3

  foo()
}

foo() // 2
bar() // 2
```

Lexical scope isn't like `this` value, `this` value can be changed in the runtime.

```javascript
var a = 2

function foo() {
  console.log(this.a)
}

function bar() {
  var a = 3

  foo.call({ a })
}

foo() // 2
bar() // 3
```
