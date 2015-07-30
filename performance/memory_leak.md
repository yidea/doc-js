# Garbage Collection(GC) & Memory Leak

https://developer.chrome.com/devtools/docs/memory-analysis-101

  /*
   * Garbage Collection(GC) & Memory Leak
   * -------------
   * http://buildnewgames.com/garbage-collector-friendly-code/
   *
   * JS virtual machine periodically auto clean up memory (GC-Garbage collector). it can take from 10ms -2000ms to cleanup depends on how many objects is created
   *
   * Memory leak friendly code:
   * - 1 don't keep reference to the objects u'r not using, use var in scope and avoid use/pollute global scope (which GC will think is active).  An object is considered garbage-collectable if there is zero reference pointing at this object.
   * - 2 delete/clear variable explictly w null when variable is not used
   * - 3 Avoid creating unnecessary objects, more object means GC need more time to process. Very var a=[],b={}, funciton c(){} will create object, array.slice(1) will return a new array obj, try to use linked-list if it's array.slice() heavy work; when lots object creation is needed. e.g. bullet class, use Object Pooling -create a pool array of objects on start var bulletPool=[],activeBullets=[], then getNewBullet() to push obj from bulletPool to activeBullets, so no need to create new obj, always use exist obj and get by factory function
   * - 4 Chrome window.performance.memory.usedJSHeapSize to check used heap memory
   * */
   
```js
function test() {
  var a = "test"; // variable declared in scope will be freed when function gone out of its scope
  b = a; //Bad- variable without var refer to global scope, GC will ignore free ref to global scope (since it never run out of global scope)
  var s = {data: "test"};
  s = null; //clear referernce to null so GC knows it's not required and can be freed
}
test();

// Circular reference and closure
function addHandler() {
  var el = document.getElementById('el');
  el.onclick = function() { //el created a circular reference between dom object el and js object (anonymous handle function with el as context)
    this.style.backgroundColor = 'red';
  };
}
```
