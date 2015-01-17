# Types, Values & Variable

JS variable doesn't have type by itself, only value has type, variable can hold value and change on the run -- JS is a dynamic weak typed language that type are determined at run time not compile time. ```var a = 10; a = "10"```

JS has 7 build-in types: **null, undefined, boolean, number, string, object, symbol(add real private prop in ES6)**.

```js
//use typeof to inspect type of value
typeof a === "undefined"; //true
typeof true === "boolean"; // true
typeof 12 === "number"; // true
typeof "12" === "string"; // true
typeof {} === "object"; // true
typeof [] === "object"; // true
typeof function(){} === "object"; //true
typeof Symbol() === "symbol"; // true
// null is buggy in JS inherited from java, type is object but value is falsy
typeof null === "object"; // true
```

There are 2 category of those 7 types values in JS:
1. Primitive values - passed by value (e.g. String, Number, Boolean)
2. Reference values - passed by reference(e.g. Object).

### Reference
- [You Don't know JS](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
