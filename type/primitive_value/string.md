# String

String is like array: arrays of characters, similiar method e.g. length, charAt() But also dislike array: array is mutable, string is __immutable__ (sting method can't edit in-place, but rather return a new string, so can't borrow array's mutation method .e.g reverse/push/splice/pop) `typeof "abc" === "string";`

- length, indexOf
- concatenation
- string2array

<iframe width="100%" height="350" src="http://jsbin.com/bubav/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Convert String to Number

There're many ways for converting string to number https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls

```js
Number(num); // Number constructor, preferred
parseFloat(num) // floating point, then use isNaN(), similar to Number() but Number("123foo") return NaN, but parseFloat return 123
parseInt(num); // default way (no radix)
parseInt(num, 10); // parseInt with radix (decimal)
~~num //bitwise not
num / 1 // diving by one
num * 1 // multiplying by one
num - 0 // minus 0
+num // unary operator "+"
```  
