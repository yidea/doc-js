# Error

Error constructor can be used to create user-defined exception object
 
### Exception Handling
If you are running a pile of async task, it's very likely one of them has errors, exception handling will help here
```js
// throw error
function bindFn(fn) {
  if(!_.isFunction(fn)) throw new Error("fn must be a function"); //use new Error instead throw "sth" to add a stack trace 
}

// try catch finally 
var json; 
try {
  //run a fn that might throw error e.g. async
  json = JSON.parse(input);
} catch (e) {
  json = null;
  console.log(e.stack); //print stack trace
}
```
