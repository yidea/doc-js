# Factory pattern

http://www.joezimjs.com/javascript/javascript-design-patterns-factory/
https://carldanley.com/js-factory-pattern/

Factory pattern is a Creational design pattern for generate different instance with a common instance. e.g. UI widget factory for tab 

jQuery UI widget Factory
```js
$.widget("custom.tab", {
  _create: function(){
    this.element.addClass("active");
    this._on(this.changer, {click: "onClickBtn"})
  },
  onClickBtn: function(){}
});
$( "#my-widget1" ).tab();
```
