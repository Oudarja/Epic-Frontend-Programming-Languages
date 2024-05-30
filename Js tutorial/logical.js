const a=12;

const b=3;


// The && (logical AND) operator returns the first operand if it is falsy (i.e., evaluates to false, 0, '', null, undefined, or NaN), otherwise it returns the second operand.
//In this case, both a (11) and b (3) are truthy, so the && operator returns the second operand, which is b (3).
console.log(a && b);

// The || (logical OR) operator returns the first operand if it is truthy (i.e., evaluates to anything other than false, 0, '', null, undefined, or NaN), otherwise it returns the second operand.
//In this case, both a (11) and b (3) are truthy, so the || operator returns the first operand, which is a (11).
console.log(a||b);


// The || (logical OR) operator returns the first operand if it is truthy (i.e., evaluates to anything other than false, 0, '', null, undefined, or NaN), otherwise it returns the second operand.
//In this case, both a (11) and b (3) are truthy, so the || operator returns the first operand, which is a (11).


// Bitwise logical operation
console.log(a & b);
console.log(a|b);

// Number and string
console.log(a*"PIT");

console.log(a*"80");

