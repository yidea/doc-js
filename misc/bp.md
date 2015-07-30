# JS BP

- IIFE
IIFE is used to create closure for methods ot avoid polluting global namespace
 
```js
(function () {
  //..
}());
```

- JSON parse
 
```js
var settings;
try { //avoid parse error
  settings = JSON.parse($.cookie(TIRE_FINDER_KEY)); 
} catch (err) {}
if (settings) { this.set(settings); }
```

- fn.apply(this, [arg1, ..]) vs fn.call(this, arg1, ..)

```js
{
  remove: function (options) {
    Backbone.View.prototype.remove.call(this, options); // call + options explicitly
  },
  remove: function () {
    Backbone.View.prototype.remove.apply(this, arguments); // apply + argument implicitly
  },
}
```

- function, arguments validate
 
```js
function test (data) {
  //@ validate input
  //data = data || {}; if(!data.step) {return}//prep data if {} 
  //data = + data; if(_.isNaN(data)) return; //prep data if 
  if (data == null) { return; } // check null/undefined
  //throw new Error("A "url" property or function must be specified"); //or throw new Error instead of return for type error  
  
}

```
