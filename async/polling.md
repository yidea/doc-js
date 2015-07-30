# Long Polling, Commet & WebSocket 
AJAX Polling is a tech for keep client and server communication like realtime. e.g. Stock, Gmail

- Traditionally polling: repeat ajax calling service with setInterval(fn, 30000) or use setTimeout with recursion
- Long Polling: An efficient Server-push technique

```js
// Long Polling (Recommened Technique - Creates An Open Connection To Server ∴ Fast)
(function poll(){
    $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
    }, dataType: "json", complete: poll, timeout: 30000 });
})();

// The setInterval Technique (Not Recommended - Creates Queues of Requests ∴ Can Be Slow)
setInterval(function(){
    $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
    }, dataType: "json"});
}, 30000);

// The setTimeout Technique (Not Recommended - No Queues But New AJAX Request Each Time ∴ Slow)
(function poll(){
   setTimeout(function(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
        //Setup the next poll recursively
        poll();
      }, dataType: "json"});
  }, 30000);
})();
```

- WebSocket
 
```js
var socket = io.connect("http://localhost"); //using socket.io
socket.on('sales', function (data) {
  //Update your dashboard gauge
  salesGauge.setValue(data.value);

  socket.emit('profit', { my: 'data' });
});

```

### Reference
- http://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery

