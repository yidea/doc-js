# Regular Expression

Regular expressions are patterns used to match character combinations in strings, they're also objects

```js
// Creating Regular expression
var re = /test/g; // 1 literal
var re = new RegExp("test", "g"); // 2 constructor

//match HTML tag 
var reHtmlTag = /<(.|\n)([^<|>]+)*>/g;
"<p class='test'>test</p><img class='a.png'/>".match(reHtmlTag); //["<p class='test'>", "</p>", "<img class='a.png'/>"]
```

[8 Userful Regular Expression](http://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149)

<iframe width="100%" height="350" src="http://jsbin.com/qecog/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
