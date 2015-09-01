# Web Performance

### Web Performance Rule of Thumb
- Less HTTP request #:
  Less # request the better performance you will have. inline/Bundle to 1 js,css, iconfont/image sprite. Web workder/Websocket
  Prefetch DNS `<link href="//i5.walmartimages.com" rel="dns-prefetch">`
   
- HTTP response size: 
  gzip, cache local, lazyload non critical rendering

### Server Infrastructure  
- Load Balancing 
  haproxy
- SSL Termination 
  stud
- Web Server
  nginx
- Database
  NOSQL for fast I/O operation (Mongodb, Couchdb)
- FE Server
  Isomophic (Nodejs + React)
- CDN 
  For static assets, serve caches from CDN(Content Delivery Network) - content closest to user location.  increase max-age

### Resources
- Gzip all 
  * Gzip js/css/html. Bring JS down to 30% (jquery1.11 from 94KB to 33KB). Bring CSS down to 10% (bootstrap3.1.1.min.css from 98KB to 17KB) 
  https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer?hl=en
  * don't need to Gzip image/video since their format are already compressed
- Cache often
  use CDN(Akamai)/Varnish cache    
   
### Critical Rendering Path/Initial page load

Performance budget/metrics (how many image/http request/js/css)
   
- DNS, avoid Redirects for first byte
- Server side rendering on first load    
- Image:
  Use iconfont, data uri, image sprite. Lazyload image (e.g. carousel, hero image). Gzip image and in right format, use iconfont or Data URI inline if possible (save a http request). Cache on CDN Akamai
- CSS: only load necessary gzipped CSS that affect initial page load (delay rest). Use browser cache or store in localstorage. Consider inline CSS
- JS: similiar as CSS rule, only script that affect initial page load, lazy load rest (analytics, 3rd party module). Cut down JS bundle size, use vanilla JS (remove unnecessary lib e.g. jQuery) 

### Javascript
- Never block the JS event loop
  JS is single threaded and using event loop+callback for opeartion.
  * Move away Non-Critical-Rendering script (analytics, 3rd party) to end of body/Delay execute time  
  * Avoid long time running script (calculation), add timeout, error handling or delegate to Web Workers (>10ms)  
  * Use async instead of sync
- Progressive Enhancement  

