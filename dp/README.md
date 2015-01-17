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
