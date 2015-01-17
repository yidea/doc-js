# OOP

JS is prototype-based OOP, which classes are not present, and inheritance is accomplished via prototype chain (every object is an instance of Object, inherit its prototype)

### Namespace
Namespace is for avoiding naming conflict, in JS it's an object 
```js
var MYAPP = MYAPP || {}; //global namespace 
MYAPP.event = {addListener: function(el, type, fn){}}; //sub namespace
```

### Class, Constructor, Instance, this
JS doesn't have class statement, but use function as constructor and create instance w new Constructor(),  
```js
function Person(name){//Constructor
  this.name = name; //constructor is a method called at new instance for setup prop
}
var person1 = new Person(); //instance
```

### Method 
```js
Person.prototype.sayHi = function() {
  console.log(this.name);
}
```

### Inheritance
JS inheritance is done by pointing child.prototype to parent.prototype using Object.create()
```js
function Student(name, grade){
  Person.call(this, name); //copy the parent constructor
  this.grade = grade; //setup its own
}
Student.prototype = Object.create(Person.prototype); // inherit from Person.prototype
Student.prototype.constructor = Student; //correct Object.create() set constructor to Object
Student.prototype.sayHi = function() { //override sayHi in Student.prototype
  console.log(this.name + this.grade);
}
``` 
