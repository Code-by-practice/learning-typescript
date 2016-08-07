'use strict';

/**
 * Type assertions
 * A type assertion is like a type cast in other languages,
 * but performs no special checking or restructuring of data.
 * It has no runtime impact, and is used purely by the compiler.
 */

/**
 * Type assertions have two forms. One is the “angle-bracket” syntax.
 */
let myName: any = "Ashwin";
let nameLength: number = (<string>myName).length;

console.log('Name length: ', nameLength);

/**
 * And the other is the "as" syntax.
 *
 * Note: The two samples are equivalent.
 * Using one over the other is mostly a choice of preference;
 * however, when using TypeScript with JSX, only as-style assertions are allowed.
 */
let author: any = "Ashwin";
let authorLength: number = (author as string).length;

console.log('Author length: ', authorLength);
