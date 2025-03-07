// FUNCTION EXPRESSIONS

// const add = function (x, y) {
//     return x + y;
// }
// add(5,5) //10

//HIGHER ORDER FUNCTIONS

// function callTwice(func) {
//     func();
//     func();
// }
// function laugh() {
//     console.log('HAHA');
// }
// callTwice(laugh)

//RETURNING FUNCTIONS

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function() {
//             console.log('CONGRATS, I AM A GOOD FUNCTION!')
//             console.log('YOU WIN A MILLION DOLLARS!')
//         }
//     }
//     else {
//         return function() {
//             alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!')
//             alert('STOP TRYING TO CLOSE THIS WINDOW!')
//             alert('STOP TRYING TO CLOSE THIS WINDOW!')
//             alert('STOP TRYING TO CLOSE THIS WINDOW!')
//             alert('STOP TRYING TO CLOSE THIS WINDOW!')
//             alert('STOP TRYING TO CLOSE THIS WINDOW!')
//         }
//     }
// }

// //Use makeMysteryFunc() to assign this function to a variable!

// const mystery = makeMysteryFunc()

//The following code can be used to define future variables

// function makeBetweenFunc(min, max){
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// //^^USE THIS FUNCTION TO DEFINE VARIABLES

// const isChild = makeBetweenFunc(0,17);

// const isAdult = makeBetweenFunc(18,64);

// const isSenior = makeBetweenFunc(65,120);

//DEFINING METHODS

// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num * num;
//     },
//     cube: function(num){
//         return num ** 3;
//     }
// }

// // myMath.square(2) //4
// myMath['square'](2) //4
// // myMath.cube(2) //8
// myMath['cube'](2) //8

//THE MYSTERIOUS KEYWORD 'this'

// const person = {
//     first: 'Robert',
//     last: 'Herjavec',
//     fullName() {
//         return `${this.first} ${this.last}`
//     }
// }
// person.fullName(); //"Robert Herjavec"
// person.last = "Plant";
// person.fullName(); //"Robert Plant"

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log(`${this.name} says MEOW`);
//     }
// }

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount ++;
//         return "EGG";
//     }
// }

