'use strict';

/**
 * Enum Type, an enum is a way of giving more friendly names to sets of numeric values.
 */
enum colorPattern1 {Blue, Green, Red};
let b: colorPattern1 = colorPattern1.Blue;
console.log('blue: ', b);

/**
 * You can change this by manually setting the value of one of its members.
 * Or even manually set all the values in the enum.
 */
enum colorPattern2 {Yellow = 2, Black, White};
let y: colorPattern2 = colorPattern2.Yellow;
let bl: colorPattern2 = colorPattern2.Black;
console.log('yellow: ', y);
console.log('black: ', bl);

/**
 * enums is that you can also go from a numeric value to the name of that value in the enum.
 */
let colorName: string = colorPattern2[2]; // [2] enum value
console.log('Color name: ', colorName); // Yellow
