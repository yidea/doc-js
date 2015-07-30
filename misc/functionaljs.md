# Functional JS

### Object
 
```
//pick only property that value is defined: use _.pick or delete prop 
var obj = { year: 199, make: '', model: undefined}
_.pick(sourceObj, _.identity);
var final = _.pick(obj, function (value) {
  return value;
});

```
