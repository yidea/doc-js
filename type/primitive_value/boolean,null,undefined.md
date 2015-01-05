# Boolean,Null,Undefined

### Undefined
Variable is not defined(undeclared) or defined but have no value at the moment(undefined). JS typeof return "undefined" for both cases.

```js
//undeclared
b; // ReferenceError
typeof b === "undefined"; //true
//undefined
var a;
typeof a === "undefined"; //true
// check variable is not undefined
(typeof a !== "undefined") //false
```

### Null
null is buggy in JS inherited from java, intend as a placeholder for object, it's the only value that type is "object" but value is false ```typeof null === "object"; !null === false```,

```js
// check value is null
var obj = null;
(!obj && typeof obj === "object") // true
// check value is null or undefined
(a == undefined)
```

http://jsbin.com/qiyoj/latest/embed?js
