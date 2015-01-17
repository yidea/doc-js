# Function

In JS, functions are first-class objects, i.e. they are objects(can store prop), hoisted and can be passed around as parameter, can be called w () as method and return a value (undefined by default)
```js
// check is function
function abc(){}
typeof(abc); //"function" - recommended
Object.prototype.toString.call(abc); //"[object Function]"
abc instanceof Function; //true
```

Function can be used in 3 ways in JS
- Function `function test(){}`
- Method in object
 `var user = {
   signIn: function(){}
 };
 user.signIn();
 `
- Constructor `new Date();`

### Defining function
1. function declaration
```js
function add(a, b) { //hoist both declaration & assignment
	return a + b;
}
```
2. function expression
```js
var yell = function yell2(n) { //hoisted only declaration as var, name is optional
	return n>0 ? yell2(n-1) + "a" : "hi";
};
```
3. function constructor
```js
var add = new Function("a", "b", "return a + b"); //eval string
```

### Function API
<iframe width="100%" height="350" src="http://jsbin.com/nomuq/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Reference 
- http://book.mixu.net/node/ch5.html
- Reading: Secret Ninja JS chapter 3
