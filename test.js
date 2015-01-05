// String's arrray-like method (non-mutation)
var a = "test";
a.length === 7; //true
a.charAt(0); //t getBy index
a[1]; //e
a.indexOf("e"); //1 find value 
a.concat("ing"); //testing return a new string

// Can borrow array non-mutation method (join, map)

// Can't borrow array mutation method (reverse, push)
Array.prototype.push.call(a, "i"); //="test" can't mutate
Array.prototype.reverse.call(a); //="test" can't mutate
a.split("").reverse().join(""); //="tset" reverse w string->array->string


//string -> array
var arr = a.split(""); //["t","e","s","t"]
