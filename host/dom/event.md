# DOM event

### Event workflow
![Diagram of event phase](http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2013/10/eventflow.png)

1. __Capture phase__ - start from window, fire each node on its way to target, its main 
purpose is to build dom propagation path for travelling back in bubbling phase, mostly turned off(false) in event listener
  ```js
  //<div><a id="test">link</a></div>
  var link = document.querySelector("#test");
  var div = document.querySelector("div");
  link.addEventListener("click", function(ev){
    ev.preventDefault();	
    console.log("listening at capture phase");
  }, true); // fire at capture phase
  ```
2. __Target phase__ - fires on event target node
  
  ```js
  //ev.target vs. ev.currentTarget when user clicked a link 
  div.addEventListener("click", function(ev){
    //ev.target - refers which node is fired on, not necessary == ev.currentTarget in nested structure
    //ev.currentTarget - refer to the element which current node that event listener is attached to 
    console.log(ev.currentTarget.tagName, ev.target.tagName); //"DIV", "A"
  });
  ```
3. __Bubbling phase__ - bubble back to window via previous propagation path, it allows us to delegate event
  ```js
  link.addEventListener("click", function(ev){
    ev.preventDefault();	
    console.log("listening at bubbling phase");	
  }, false); // fire at bubble phase  
  ```

<iframe width="100%" height="350" src="http://jsbin.com/exezex/4/embed?output" allowfullscreen="allowfullscreen" frameborder="0"></iframe>   

Identifying Event phase:
<iframe width="100%" height="350" src="http://jsbin.com/unuhec/4/embed?js,output" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Event API
[Polyfill Event API for IE8-](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener#Polyfill_to_support_older_browsers)
<iframe width="100%" height="350" src="http://jsbin.com/yihoto/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Custom Event
Custom events can be a great way for building event/behavior driven modules(pubsub), communicate between modules, easy API exposed, highly decoupled, modular architecture. e.g. [Twitter Flightjs](http://flightjs.github.io/)
<iframe width="100%" height="350" src="http://jsbin.com/puceco/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### DOM Events
[DOM Event compatibility tables](http://www.quirksmode.org/dom/events/)

Useful DOM events: 
- load: 
  fire on resource(img, video, iframe) loaded 
  $image.on("load")
- error
  fire on resource loading has error (wrong url for img)
  $image.on("error")
- window.onload vs. document.DOMContentLoaded $(document).ready 
  all resource loaded vs. dom loaded
- window.onbeforeunload
  close tab event
- window.resize/scroll
  ```js
  // use debounce to prevent extreme thrashing, also useful for keyDown
  //Read: http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
  window.addEventListener("resize", _.debounce(onResize, 200));
  ```
- touchmove 
  ```js
  //document level: prevent mobile Safari from bouncing the window when it is scrolled
  document.addEventListener('touchmove', function(event) { //bubble up
   if (!event.isScrollable) event.preventDefault();
  });
  //child level: allow native scrolling
  scrollableElement.addEventListener('touchmove', function(event) {
   event.isScrollable = true; //add flag
  });
  ```
- transitionEnd/animationEnd 
  know when css transition is done 

### Reference
- [An Introduction To DOM Events](http://www.smashingmagazine.com/2013/11/12/an-introduction-to-dom-events/)
