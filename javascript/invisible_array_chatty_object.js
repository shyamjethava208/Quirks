// Adding two empty arrays  
console.log([] + []);  
// Output: ""  
// WHY? Because both arrays are converted to empty strings, and "" + "" results in ""!  

// Adding an empty array and an empty object  
console.log([] + {});  
// Output: "[object Object]"  
// WHY? The array becomes an empty string "", and the object converts to "[object Object]".  
// So, "" + "[object Object]" results in "[object Object]".  

// Adding an empty object and an empty array  
console.log({} + []);  
// Output: "[object Object]"  
// WHY? When `{}` is treated as an expression, it's ignored, so it's like writing `+[]`, which becomes `0`.  
// But when used as a value, `{}` converts to "[object Object]", leading to the same result!  

// 🤯 What’s happening?  
// JavaScript treats arrays and objects **weirdly** in arithmetic operations.  
// - `[] + []` results in `""` because both arrays become empty strings.  
// - `[] + {}` results in `"[object Object]"` due to object string conversion.  
// - `{}` at the start is tricky—it gets ignored when treated as an expression!  

// ✅ Moral of the story: JavaScript type coercion is **wild**, and adding things together doesn’t always add up! 😆  
