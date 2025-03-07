// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 20; i+= 2){
//     console.log(i)
// }

// 100
// 90
// 80
// 70
// 60
// 50
// 40
// 30
// 20
// 10
// 0

// for(let i = 100; i >= 0; i -= 10){
//     console.log(i)
// }

// const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

// for(let i = 0; i <people.length; i++){
//     console.log(people[i].toUpperCase())
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me")
//         break;
// }
// console.log("OK YOU WIN!")

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = (prompt("Too high! Enter a new guess:"))
//     } else {
//         guess = (prompt("Too low! Enter a new guess:"))
//     }
// }

// if (guess === 'q') {
//     console.log("YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses!`)
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer','gunners']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let sub of subreddits) {
//     console.log(sub)
// }

