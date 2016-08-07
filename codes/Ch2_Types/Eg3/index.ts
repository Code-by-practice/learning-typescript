'use strict';

/**
 * Array Type with number
 */
let list: number[] = [1, 2, 3, 4, 5];
console.log('Array (number): ', list);

/**
 * Array Type with string
 */
let authors: string[] = ["Ashwin", "Kumar", "Saju", "Ajay", "Jerin"];
console.log('Array (string): ', authors);

/**
 * Below will throw an error
 * TypeScript error: Type 'number' is not assignable to type 'string'
 */
// let employee: string[] = ["Ashwin", 26];

/**
 * Tuple Type
 * Note: Type order is important.
 */
let employee: [string, number];
employee = ["Ashwin", 26]; // Correct
console.log('Tuple: ', employee);

// employee = [26, "Ashwin"]; // Incorrect/Error

/**
 * Accessing an element with known index.
 */
console.log(employee[0]);
console.log(employee[1]);

console.log(employee[0].substr(3)); // Ok

/**
 * Below will throw error
 * TypeScript error: Property 'substr' does not exist on type 'number'
 */
// console.log(employee[1].substr(1));

/**
 * Accessing an element outside the set of known indices
 */
// console.log(employee[3]); //undefined

employee[3] = "Hello World"; // Ok, 'string' can be assigned to 'string | number'
console.log(employee[3]);

// employee[4] = true; // Error, 'boolean' isn't 'string | number'
