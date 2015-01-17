# Primitive values

Primitive values are data that passed by value copy, they're stored on Stack.

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

### Wrapper object for Primitives

String, Number, Boolean primitives also have its own constructor in JS, they can be used in 2 ways: 
- As constructor - w new to create object instance (so-called wrapper objects) (not recommend to use)
  ```js
  new String("abc") === "abc"; //false, object vs. string
  new Number("123").valueOf(); //123, use valueOf() to get primitive value from wrapper obj
  new Boolean(true).valueOf(); //true
  ``` 
  
- As function - convert value to corresponding primitive type
  ```js
  String(123) === "123"; //true
  ```
 
### Primitives borrow method from wrapper 
Primitives don't have method, but can implicitly borrow from their constructor/wrapper on the fly.
```js
var sub = str.substring(0, 2);
"abc".charAt(0); //"a", implicitly converted to new String("abc"), so it can use method, then after usage unwrapped to primitive value
// behind the scence
var temp = new String(str);
var char = temp.charAt(0);
temp = null; // dereference primitive wrapper
```
