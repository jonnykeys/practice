// DEFAULT PARAMS

// The Old Way:

// function rollDie(numSides) {
//     if(numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// The New Way: This is the same as above, but more compact

// function rollDie(numSides = 6){
//     return Math.floor(Math.random() * numSides) + 1
// }

// SPREAD IN FUNCTION CALLS

// const nums = [1, 2, 3, 4, 5]

// Math.max(nums) //NaN //this will not work because the numbers are in an array
// //use spread to separate each number in the array into a separate argument

// Math.max(...nums) 

// SPREAD WITH ARRAY LITERALS

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs] //You can use spread to combine arrays into one new array

// const allPets = [...cats, ...dogs, "Chief"] //you can add to the array as well
// allPets.push("Chief") //you can add to this new array without changing the old one

// SPREAD IN OBJECT LITERALS

// const feline = { legs: 4, family: 'Felidae'};
// const canine = { family: 'Caninae', furry: true};

// const dog = { ...canine, isPet: true};
// //{family: "Caninae", furry: true, isPet: true}

// const lion = { ...feline, genus: 'Panthera'};
// //{ legs: 4, family: "Felidae", genus: "Panthera"}

// const catDog = { ...feline, ...canine};
// //{ legs: 4, family: "Caninae", furry: true}

// REST PARAMS

// function sum() {
//     console.log(arguments) //arguments holds ALL ARGUMENTS put into 'sum()'
// }

// sum(1,2,3)
// //1 2 3

// The arguments object falls short with some things because it is NOT an array

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// } //THIS CODE WILL NOT WORK BECAUSE ARGUMENTS IS NOT AN ARRAY

// //This is where Rest Params come into play

// function sum(...nums) { //Now anything put into this function will be put into an array rather than an argument
//     console.log(nums)
// }

// sum(1, 2, 3) //[1, 2, 3]

// function sum(...nums){
//     return nums.reduce((total, el) => total + el) //now this code works!
// } 

// sum(1, 2, 3) //6

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to: ${gold}`)
//     console.log(`Silver medal goes to: ${silver}`)
//     console.log(`And thanks to everyone else: ${everyoneElse}`)
// }

// raceResults('Jon', 'Alisha', 'Mango', 'Brenna')
// //Gold medal goes to: Jon
// //Silver medal goes to: Alisha
// //And thanks to everyone else: Mango, Brenna

// const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

// const [gold, silver, bronze] = raceResults;
// gold; //"Eliud Kipchoge"
// silver; //"Feyisa Lelisa"
// bronze; //"Galen Rupp"

// const [fastest, ...everyoneElse] = raceResults;
// fastest; //"Eliud Kipchoge"
// everyoneElse; //["Feyisa Lelisa", "Galen Rupp"]

//DESTRUCTURING OBJECTS

// const runner = {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     title: 'Elder'
// }

// const {first, last, country} = runner;
// first; //"Eliud"
// last; //"Kipchoge"
// country; //"Kenya"

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician.',
    city: 'San Francisco',
    state: 'California'
}

// const {email, firstName, lastName, city, bio} = user;

// email; //"harvey@gmail.com"
// firstName; //"Harvey"
// lastName; //"Milk"
// city; //"San Francisco"
// bio; //'Harvey Bernard Milk was an American politician.'

//If I want to use "born" from above, but rename the variable to something else..
//I can do this:

// const {born: birthYear} = user;
// birthYear; //"1930"

//You can also set default values in your destructuring in case it does not exist

// const user2 = {
//     email: 'Stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }

// const {city, state, died = 'N/A' } = user2;

//DESTRUCTURING PARAMS

const fullName = ({first, last}) => {
    return `${first} ${last}`
}
const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
}

fullName(runner); //"Eliud Kipchoge"