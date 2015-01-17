# BOM

BOM is the Browser Object Model, a host environment(window) for ECMAScript, which deals with host object and host API. e.g. history, location, navigator, setInterval, Math, Date

### TOC
http://javascript.about.com/od/browserobjectmodel/a/bom01.htm
- window object
- Date
- setInterval, setTimeout

  /*
  * setInterval(fn, delay)
  * - schedule repeatly run fn every delay ms. When you set a timeout, it actually queues the asynchronous code until the engine executes the current call stack.
  * - this = window
  * - the delay time e.g. 100ms is not guranteed, depends on real running time, could be run the next one after 200ms if 1st one take 200ms to run, the fn is queued
  * - 1000ms = 1s
  * */
  var intervalId = setInterval(function () {
    console.log("setInterval"); //TODO:debug
  }, 100);
  clearInterval(intervalId); // cancel schedule

  /*
  * setTimeout(fn, delay)
  * - schedule run fn after given delay
  * - this = window
  * - Async/Non-block I/O: callback order is no gurantted as execution order which is depend on callback return time, so js is greate for heavy I/O system
  * - http://ejohn.org/blog/how-javascript-timers-work/
  * - http://www.brianweidenbaum.com/javascripts-settimeout-scheduled/
  *
  * - setTimeout(fn, 0)/ _.defer(fn)
  * -- setTimeout(fn, 0) buys you some time until the DOM elements are loaded (and rendering is complete), even if it’s set to 0 (run this fn code in next run loop)
  * -- This can be handy with the DOM. Sometimes you run a js, but the js which update the dom(e.g. typeahead init) don't parse or render immediately. At the end of the run loop, the browser gets back the UI thread control and parses and renders the DOM, then the next run loop starts and can interact with the newly rendered DOM w setTimout(fn, 0)
  * -- Browser has 1 single UI thread (process of JS and UI update-paint/redraw/reflow) - register async callback and event queue to non-block I/O. so UI cannot render while js is running, since responsive ui<100ms, and smooth animation w 60 frames/s need js done in 16ms, so suggeted to break long time(>100ms) js to chunk around 5ms run-time w setTimeout. Every JavaScript execution and UI update tasks will be added to a browser event queue system, which dispatches those tasks to the browser main UI Thread. When you generate new UI updates while the UI thread is busy, maybe is doing something like performing JavaScript, then those UI updates will be pushed into the UI queue system that is responsible for dispatch the tasks to the UI thread when it is idle. setTimeout(fn, 0) requeue the fn aync at the end of current execution queue so let the current long js process to finish and the affected UI to get updated. e.g. $("#test").typeahead()..big chunk of code.. instead directly ui update, $("test").focus(),give it a setTimout(fn, 0) to make sure UI is ready and js init is done.
  * -- Event Queue:
    var taskQueues = {
     domEventsQueue: {1ms: clickedButton},
     callbacksQueue: {3ms: runSomeFunction, 5ms: processDataFromServer}
    };
  * SetTimeout is just adding a new entry to a queue which cannot be accessed until later when current task is done and looking for new task in the queue.
  * -- = setTimeout(fn, 4), since modern browser clamp timer to minimal 4ms
  * */
  var f1 = function () {
    var timeId = setTimeout(function () {
//      console.log("f1"); //TODO:debug
    }, 0);
    //  clearTimeout(timeId); // cancel schedule
  };
  var f2 = function() {};
  f1();
  f2(); //output as f2, f1 because setTimeout(fn, 0) is actually setTimeout(fn, 4), so it's aync callback

  /*
   * setImmediate(fn)
   * - dose what setTimeout(fn, 0) is about to do, in a native & better way
   * - tell browser to execute fn after the last UI task in the event loop
   * - but not supported in IE10- and Mozilla, Webkit, so not very useful
   * */


  /*
  * requestAnimationFrame()
  * - schedule a new paint task in the event loop queue
  * */

  /*
   * @ matchMedia
   * ----------------------------------
   * - work with css media query IE10+
   * - Codepen: http://codepen.io/yidea/pen/pAxhi/
   */ 
   
### Date
<iframe width="100%" height="350" src="http://jsbin.com/nipaz/embed/?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>   
