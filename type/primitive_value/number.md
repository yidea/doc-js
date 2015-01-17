# Number

- JS number are all stored in binary floating point(64bit), integer range [-2^53, 2^53]
- Decimal fraction issue: 0.1+0.2== 0.30000000000000004, convert to BigNumber if doing currency calculation
- Special Number: NaN (+"a"), Infinity(3/0), -Infinity(-Math.pow(2, 1025), js exponent range [-2^1024, 2^1024])
- bitwise shift >> << >>>

<iframe width="100%" height="350" src="http://jsbin.com/dudad/latest/embed?js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
