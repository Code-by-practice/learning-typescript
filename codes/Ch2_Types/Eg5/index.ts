'use strict';

/**
 * We may need to describe the type of variables that we do not know
 * when we are writing an application. These values may come from dynamic content.
 * In these cases, use `any` Type.
 *
 * Note: The any type is a powerful way to work with existing JavaScript,
 * allowing you to gradually opt-in and opt-out of type-checking during compilation.
 * You might expect Object to play a similar role.
 */
let notSure: any = 26;
console.log('Number: ', notSure);

notSure = "Hello World!";
console.log('String: ', notSure);

notSure = true;
console.log('Boolean: ', notSure);

let a: any = 45;
a.ifItExists(); // Ok, ifItExists might at runtime.
a.toFixed(); // Ok, toFixed exists but the compiler doesn't check.

/**
 * Void Type, void is a little like the opposite of any: the absence of having any type at all.
 * You may commonly see this as the return type of functions that do not return a value
 *
 * Note: Declaring variables of type void is not useful because
 * you can only assign undefined or null to them.
 */
function message(): void {
  console.log("Hello World! My name is Ashwin");
}
