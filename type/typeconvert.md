# Type Coercion
 
```js
// Explicit
String(123) === "123"; //true
String(undefined); //"undefined"
String(null); //"null"
String(false); //"false"

Number("123") === 123; //true, Number("a") -> NaN
Number(undefined); //NaN 
Number(null); //0
Number(true); //1, false->0

Boolean(0) === false; //true
// 6 falsy values: false, undefined, null, 0, NaN, "", all other values are truthy(include empty object {})

Object(undefined); //{}
Object(null); //{}
var obj = {foo: 1}
Object(obj) === obj; //true object is returned (no convert)
Object("abc") instanceof String; //true primitive is converted to wrapped primitve

// Implicit
// * coerced to number 
"3" * 4 === 12; //true
// + coerced both to string if has any string
100 + "20" === "10020"; //true

Number(null) === 0; //true
5 + null === 5 //true
isNaN(Number(undefined)); //true
isNaN(5 + undefined); //true
```

### Reference 
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) 
