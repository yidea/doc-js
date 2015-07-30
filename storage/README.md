# Cookie, LocalStorage & SessionStorage

HTTP is stateless protocol, so for Web App's persistence of user data/app state or caching resources, e.g. user login, ui preference, reusable css/js, we need to use browser client storage solution like cookie or HTML5 localStorage/sessionStorage.

__Key consideration for which to use:__
- Need to send to server?  
- Size limit
- IE8- support 
- Security
- Expire
 
### Cookie
A cookie is nothing but a small text file that's stored in your browser, the data format is string of key value pair, it also has an expire date, domain & path set to it. set path to "/" so cookie can be accessed throughtout the entire domain and app, otherwise it will be only specific for that page. Cookie is usually used for storing user preference, login, tutorial step
- Pros:
  * Legacy browser support  
  * Expire date config
  * Send to server w Browser HTTP request (in HTTP headers) 
- Cons
  * need JSON serialise to store/use as object 
  * 4KB storage size 
  * Data is unencrypted, SQL injection
  
```js
//recommend using jquery.cookie plugin for normalize cookie API
$.cookie.json = true; //JSON serialise will be taken care
$.cookie('name', 'value', { expires: 30, path: "/" }); //Set expire 30 days and set cross domain
$.cookie('name'); //Get
$.removeCookie('name', { path: "/" });
``` 
   
### LocalStorage/SessionStorage
HTML5 introduced LocalStorage/SessionStorage, it's a key-value store in browser w API to set/get/remove and events to track changes

- Pros:
  * 5MB storage size per domain
  * Security
  * Performance (NOT Send to server w Browser HTTP request)
  * Expire: LocalStorage stores data permanently in browser, SessionStorage will get deleted when user close tab/browser 
   
- Cons:
  * NOT Legacy browser support (IE8+)
  * Mobile support
 
```js
//localStorage/sessionStorage API
localStorage.setItem("fontsize", "16px"); //simple value
localStorage.setItem("myCar", JSON.stringify({name: "test"})); //object
var fontsize = localStorage.getItem("fontsize");
var obj = JSON.parse(localStorage.getItem("myCar")); //also need try catch for undefined
localStorage.removeItem("fontsize");
localStorage.clear(); //empty whole localStorage
//Storage events change watcher
window.addEventListener("storage", function(e){
  console.log(e,key, e.oldValue, e.newValue);
})
```

<iframe width="100%" height="350" src="http://jsbin.com/vojuqe/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Reference 
- http://www.quirksmode.org/js/cookies.html
