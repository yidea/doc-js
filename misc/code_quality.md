# Code Quality & Refactor

http://12devsofxmas.co.uk/2014/01/day-8-architecting-your-front-end-javascript/

- [Talk on refactoring from Ben Orenstein](https://www.youtube.com/watch?v=DC-pQPq0acs)
- Book-Refactoring: Improving the Design of Existing Code
- Clean Code

### Guidelines
- Large methods are inferior to small methods, and methods with more parameters and inferior to those with less.
 
- Tell don't Ask principle & Event/pubsub system
Better to send a a signal to ask method to execute, instead of asking the method.status then decide on behalf of the method.

- Functional programming. Treat input->output process like a chaining function/task factory. .each/map/filter/reduce/every/some
https://github.com/timoxley/functional-javascript-workshop

- Manage zombies & Memory Leak: use view events{}, listenTo to manage UI events on/off, use BaseView._addSubView to manage view management
 
- AMD, Modular system

- TDD

- Public/Private, IIFE
Avoid Global namespace polluting 
use _ensureElement naming style for method/property that should not be overwritten or called on instance 

