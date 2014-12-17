# Primitive values

There are 2 types of values in Javascript:
1. Primitive values - passed by value (e.g. String, Number)
2. Reference values - passed by reference(e.g. Object, Array).

```js
//Prmitive value is passed by value
var num = 1,
    numObject = new Number(1);
console.log(num === num); //true
console.log(num === numObject); //false
console.log(numObject === numObject); //false
console.log(typeof(numObject), typeof(num)); //object,number
```

There are 5 type of primitives values in js: **String, Number, Boolean, Undefined, Null**
