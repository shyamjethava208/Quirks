// Checking if null is equal to 0 using loose equality
console.log(null == 0);  
// Output: false  
// WHY? Because `null` loosely equals `undefined`, not numbers!  

// Checking if null is greater than 0
console.log(null > 0);  
// Output: false  
// WHY? When compared with numbers, `null` is treated as 0, but 0 is not greater than 0!  

// Checking if null is greater than or equal to 0
console.log(null >= 0);  
// Output: true  
// WHY? Because `null` is converted to 0 during the comparison, and 0 is greater than or equal to 0!  

// 🤯 What’s happening?  
// JavaScript has **weird coercion** rules with null.  
// - `null == 0` is `false` because loose equality doesn’t convert `null` to a number.
// - `null > 0` is `false` because JavaScript compares `null` as `0`, and `0` is not greater than `0`.
// - `null >= 0` is `true` because JavaScript converts `null` to `0` for comparison, and `0 >= 0` is `true`.  

// ✅ Moral of the story: JavaScript's type coercion can be **confusing**, and it's better to use **strict equality (`===`)** to avoid surprises!
