# Reference values

Reference values are data that passed by reference(pointer) instead of value copy, they're stored on heap

```js
//Reference value is passed by reference not value
console.log([1, 2] === [1, 2]); //false
console.log({a:1} === {a:1}); //false
```

There are
array, object, function
