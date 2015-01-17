# Reference values

Reference values are data that passed by reference(pointer) instead of value copy, they're stored on heap, in js reference values are essentially object (typeof)

```js
//Reference value is passed by reference not value
console.log([1, 2] === [1, 2]); //false
console.log({a:1} === {a:1}); //false
```

There are
array, object, function, regular expression, instance of custom constructor
