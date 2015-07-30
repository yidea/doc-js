# Design Pattern

- Module Pattern
  * Great for need to create singleton w private & public member, e.g. Util
  * object-creation pattern to using IIFE create a singleton obj w private data and returns an object as public api
  * IIFE (Immediately invoked function epxression) (function () {}()); - create a function scope to store private/local data
  * Revealing Module Pattern: move function code block from return object to IIFE and assign to public by reference
  ```js
  var person = (function () {
    // private data w _
    var _age = 25;
    function _getAge() {return _age;}
    //public
    return {
      getAge: _getAge //revealing module pattern
    };
  }());
  ```

- new Constructor Pattern
  * Great for need to create multiple instance which has it's own private & public member, UI dropdown
  * create instance w new, this refer to object, prototype is shared across instance
  ```js
  function Car(name) {
    //private
    var time = "2014"; //private- accessible in constructor only
    //public
    this.name = name;
    this.getTime = function () {return time;};
  }
  Car.prototype.getName = function () {return this.name;}; //can not access time which is priate, can only access this.prop
  
  var car1 = new Car("honda");
  console.assert(car1.getTime() === "2014", "car1.getTime() == 2014");
  console.assert(car1.getName() === "honda", "car1.getName() == honda");
  ```
  
  /*
   * Design Pattern & Backbone
   * -------------
   * - Reading:
   * JSIQ
   * http://addyosmani.com/resources/essentialjsdesignpatterns/book/
   * http://shichuan.github.io/javascript-patterns/
   *
   * - 3 categories: Creational, Structural and Behavioral
   * - Gang of Four (GoF)
   *
   */
  
  /*
   * @ Singleton
   * ----------------------------------
   * - get only one searchModel
   */
  
  /*
   * @  Publisher-Subscriber
   * ----------------------------------
   * - event .on/trigger
   */
  
  /*
   * @ Event Aggregator vs. Mediator
   * ----------------------------------
   * -https://github.com/addyosmani/backbone-fundamentals/blob/gh-pages/chapters/07-common-problems.md
   * - Event Aggregator: global/higher level event w pubsub. viewA,viewB handles its' own logic
   * e.g. $("body").on("click", "a", fn); //event delegation in dom
   * BB views communicate:
    * typeaheadView:Backbone.trigger("typeahead:changeCategory"); dropdownView:Backbone.on(typeahead:changeCategory, fn)
   *
   * - Mediator: similar to Event Aggregator, but the facilitate logic code/handler is in the mediator object itself not in viewA, viewB.
   * e.g
   * var Mediator = function(){
   *  Backbone.on("typeahead:changeCategory", doStuff)
   * }
   * Mediator.prototype.doStuff = function(){};
   */
  
  /*
   * @ MVC | MVP | MVVM
   * -------------
   * - MVP(Presenter)
   * - a simple MVC js implementation (similar to backbone)
   * https://github.com/addyosmani/backbone-fundamentals/blob/gh-pages/chapters/18-appendix.md
   */
  
  /*
   * @ Module Pattern
   * -------------
   * - 148
   * - e.g. IIFE,commonJS, AMD, jQuery
   */
  
  /*
   * @ Continuation-Passing style
   * -------------
   * - a function take a callback as explicit continuation
   * - e.g. each/ajax callback
   */
  function some(obj, callback, context) {
    if (obj == null) {return false;} //validate null/undefined
    // if array and native support
    if (nativeSome && obj.some === nativeSome) {
      return obj.some(callback, context);
    }
  }
  
  /*
   * @ Chaining method
   * -------------
   */
  
  
  /*
   * @ Promise
   * -------------
   * http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promise-terminology
   */
  
  

