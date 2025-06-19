/* Its main purpose is to make it easier and simpler to check for null or undefined values in your code, and give you a way to provide a default value in case those values do show up.
Basically, the operator looks at the value on its left side, and if it's null or undefined, it'll return the value on the right side instead. 
But if the value on the left side exists and isn't null or undefined, then it'll just return that value as-is. */

const foo = null ?? 'default value';
console.log(foo); // "default value"

const bar = 'hello' ?? 'default value';
console.log(bar); // logs "hello"

console.log(undefined ?? "It's undefined!") // It's undefined!