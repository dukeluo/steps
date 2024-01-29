---
title: 'The prototype chain for `Function()` constructor and `Function` objects'
category: javascript
tags: [prototype]
dateCreated: 2024-01-29
dateModified:
---

In javascript, each object has a prototype object, which can be accessed by a `__proto__` accessor. And each `Function`
object has a `prototype` property since it can be used as a constructor, the `prototype` property holds the common
methods and properties of all instances.

`Function()` constructor is used to create `Function` objects. Since `Function()` constructor itself is a `Function`
object, its `__proto__` will be equal to `Function.prototype`, this is to say `Function.__proto__ === Function.prototype`.

```javascript
const Foo = new Function()
const foo = new Foo()

foo.prototype // undefined
foo.__proto__ === Foo.prototype // true

Foo.prototype // {}
typeof Foo.prototype // 'object'
Foo.__proto__ === Function.prototype // true

typeof Function.prototype // 'function'
Function.__proto__ === Function.prototype // true

Function.prototype.prototype // undefined
Function.prototype.__proto__ === Object.prototype // true

typeof Object.prototype // 'object'
Object.prototype.prototype // undefined
Object.prototype.__proto__ === null // true

// FYI, `__proto__` is non-standard but de-facto implemented by many JavaScript engines
```
