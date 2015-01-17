# Scope, Closure
 
### Lexical Scoping & JS Compilation
- __Lexical scoping__ variables are lexically scoped, at JS compilation time, JS engine tokenize all variables in the code into lexical scope dictionary before running code. Lexical scope is maintained dictionary of rules/records of variable/function that determines where and how a variable can be looked-up for JS engine to use
- __JS Compilation__ JS engine first complies code and tokenize variable to lexical scope before running code, below are the 3 steps:
  1. Tokennizing/Lexing - break variables into tokens. e.g. `var a=2;` breaks into tokens array `[var,a,=,2,;]`
  2. Parsing - Process a array of tokens, parse into AST tree (Abstract Syntax Tree)
    ```
    Variable Declaration - Identifier = a
                           - AssignmentExpression - NumericLiteral=2  
    ```
  3. Code-Generation
  Process AST, parse into executable code(machine instruction)
  
```js
function foo(a) {
  //console.log( a + b ); //RHS lookup varaible b, if not found in scope, throw ReferenceError
  b = a; //LHS(Assignment) look up varaible b, if not found in scope then define in Global 
}
foo( 2 ); //RHS(Retrieve) lookup foo, found it then run it with () and assign a=2
```

### Hoisting
JS variable/function declaration are hoisted
- function declaration is completely hoisted (both declaration and assignment)
  ```js
  run(); //true
  function run(){return true;}
  ```
- variable declaration is partly hoisted (only hoist declaration, not assignment)
  ```js
  run(); //undefined is not a function 
  var run = function() {} //-> var run; assignment only occur when code runs to here
  ```
  
### Scope Chain
JS use function-scope instead of block scope, `function(){}` creates a local scope
(only try/catch and let can create a block-scope).

```js
function foo(arg) {
    function bar() { 
        console.log('arg: '+arg); //access outer scope
    }
    bar();
}
console.log(foo('hello')); // arg: hello
```
Scope Lookup - Lookup start from inner local scope to outter .. glboal scope(e.g. window), stop when find first match

### this
- this in JS is dynamic, determined by how the function is called
obj.fn() -> obj; fn() -> window/undefined(strict mode); setTimeout(fn, 0) -> window
- use fn.apply,call,bind() to manipulate this context
http://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this

### Closure & IIFE
- __Closure__ - inner function is able to access outter lexical scope (Nested function/scope)
- __IIFE__ - Immidiately Invoking Function Expressions - create private/public scope, avoid pollute global namespace
  ```js
  (function(){ //the first ( make it function expression
  })();
  ```
  
<iframe width="100%" height="350" src="http://jsbin.com/welezo/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Reference
- [JavaScript-Scoping-and-Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- [You Don't Know JS(Scope & Closures), CH 1-5](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)
- https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes
- http://book.mixu.net/node/ch4.html
