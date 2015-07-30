# General Performance Guide

It all starts from [how browser & HTTP protocol works](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
 
### Minify HTTP request #
Only on Demand request
  
### Gzip&Compress all HTTP response resources
Gzip & compress js/css/html/img, bundle js/css into one file, 

### Cache & CDN resources 
Cache everything that need computed w KV store, CDN with Akamai. Bing caches js/css snippets in LocalStorage 

- Run function once Use _.memoize to store calculated data on your frequently called function. e.g. Factorial(n)  
- Precompile hbs template: save runtime hbs string compile to function

### Browser DOM rendering 
- DOM manipulate is expensive (Like a read/write to database), so batch DOM updates with [DocumentFragments](http://ejohn.org/blog/dom-documentfragments/)
- Use Event Delegation to save some events objects, e.g. for datatable 

    
  * http://www.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/
  
### Avoid JS Memory Leak/ Better Garbage Collection
Especially in SPA, where JS memory is not wiped on every click. De-reference the object you are not using anymore, keep track of subView(remove subView on parentView.remove()) and eventListner w  listenTo() (Backbone), or use .off() after dom is removed manually

In Backbone, if you use on, once, listenTo, or listenToOnce, you have added a callback to an internal array that will stay there until (a) the object is dereferenced in JavaScript or (b) you call off or stopListening accordingly
  
### Choose the right JS Data Structure, Algorithm and Design Pattern

- __Data Structure__

  e.g. Use Object or Array, Mutable or Immutable data collection (https://github.com/facebook/immutable-js). Check details in http://www.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/ 

  Object vs. Array 
  - Object 
    
    Good: 
    * Can use object for create constructor, prototype method, singleton. You can delete prop
    
    Bad:  
    * Iterate object property is slower than array `for(var key in obj) { if(ob.hasOwnProperty(key)) obj[key]}` which will go through prototype chain. also don't have .length property need use `Object.keys(obj).length` or `_.size(obj)`
     
  - Array
    
    Good: 
    * Use array when you want store a bunch of number, string (e.g. states, fruits), or like a datatable with student `[{name:"Mike"},{name:"Vinc"}]`
    * Array is integer-index based and has .length prop, much faster to iterate than object property
    
    Bad: 
    * Delete/Insert array element is expansive
     
- __Design Pattern__

  For web application, we usually use the MVC pattern for code structure, Observer/Event pattern for UI communication
  * UI flow: event delegate->model/state(eventbus) change->view render (1view-1model)
  
    
### JS Profiling & Benchmark  
Performance object API in Chrome 
  
### Reference 
- High Performance Javascript
- https://developers.google.com/speed/articles/optimizing-javascript
