// Are two empty arrays equal?
console.log([] == []); // Output: false
// Wait, what? Why false? 
// Arrays in JavaScript are reference types, meaning they’re compared by memory location.
// Even though both are empty arrays, they’re not pointing to the same place in memory.
// So yeah, [] == [] is false!

// Now here’s the fun part:
// If we assign one of them to a variable and use it in an if statement:
let a = [];
if (a) {
    console.log("Now it's true!"); // This runs because arrays are "truthy."
}
// Arrays are truthy, but two empty arrays aren’t equal unless they share the same reference. Crazy, right?

// -----------------------------------------------

// Empty array compared with the negation of another empty array
console.log([] == ![]); // Output: true
// Oh boy, this one’s wild. Let me explain:
// Step 1: `![]` becomes `false` because an empty array is truthy (yep, it’s true).
// Step 2: The comparison becomes [] == false.
// Step 3: JavaScript’s type coercion magic kicks in:
//   - `false` is coerced into 0.
//   - `[]` is coerced into an empty string ('').
// Step 4: The comparison becomes '' == 0, which is... true!
// JavaScript never fails to surprise us.

// -----------------------------------------------

// Can an empty array be falsy?
let b = [];
if (!b) {
    console.log("hello world"); // This doesn’t run!
}
// Why not? Because arrays are always truthy in JavaScript, even if they’re empty.
// The `!` operator flips the truthiness, but since b is truthy, the condition is false.
// So, an empty array is truthy, but don’t expect two empty arrays to ever be equal!

// -----------------------------------------------

// Is an empty string equal to 0?
console.log('' == 0); // Output: true
// This one’s classic JavaScript behavior:
// Step 1: '' (empty string) is a falsy value.
// Step 2: When you compare it to 0 with ==, type coercion happens:
//   - '' gets converted into 0.
//   - And 0 == 0 is obviously true. 

// -----------------------------------------------

// THE TAKEAWAY:
// JavaScript’s type coercion and truthy/falsy rules are the source of a lot of funny behavior.
// Always use === (strict equality) if you don’t want to end up scratching your head like this.
// But hey, these quirks make JavaScript fun, don’t they?

// BONUS:
// What’s the quirkiest thing you’ve seen in JavaScript or any other language? Let’s share some laughs! 😄
