// // //FOREACH METHOD

// // // const numbs = [9,8,7,6,5,4,3,2,1]

// // // nums.forEach(function (n) {
// // //     console.log(n *n)
// // //     //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
// // // });

// // // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// // // function print(element) {
// // //     console.log(element)
// // // }

// // // numbers.forEach(print);

// // //You will not generally see previously defined functions used like above
// // //It will usually look more like this:

// // // numbers.forEach(function (el){
// // //     console.log(el)
// // // })

// // // numbers.forEach(print);

// // // //this is the same as the for..of loop. Look below

// // // for (let el of numbers) {
// // //     console.log(el);
// // // }

// // // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// // // numbers.forEach(function (el){
// // //     if(el % 2 === 0) {
// // //         console.log(el)
// // //     }
// // // })

// // // const movies = [
// // //     {
// // //         title: 'Amadeus',
// // //         score: 99
// // //     },
// // //     {
// // //         title: 'Stand By Me',
// // //         score: 85
// // //     },
// // //     {
// // //         title: 'Parasite',
// // //         score: 95
// // //     },
// // //     {
// // //         title: 'Alien',
// // //         score: 90
// // //     }
// // // ]

// // // //I want the movie name and its score out of 100

// // // movies.forEach(function(movie){
// // //     console.log(`${movie.title} - ${movie.score}/100`)
// // // })

// // //THE MAP METHOD

// // // const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// // // const caps = texts.map(function (t){
// // //     return t.toUpperCase();
// // // })

// // // texts; //['rofl', 'lol', 'omg', 'ttyl']
// // // caps; //["ROFL", "LOL", "OMG", "TTYL"]

// // //^^Saved new array in a new variable called caps

// // // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// // // const doubles = numbers.map(function (num){
// // //     return num * 2;
// // // })

// // // const movies = [
// // //     {
// // //         title: 'Amadeus',
// // //         score: 99
// // //     },
// // //     {
// // //         title: 'Stand By Me',
// // //         score: 85
// // //     },
// // //     {
// // //         title: 'Parasite',
// // //         score: 95
// // //     },
// // //     {
// // //         title: 'Alien',
// // //         score: 90
// // //     }
// // // ]

// // // const titles = movies.map(function(movie){
// // //     return movie.title;
// // // })
// // //['Amadeus', 'Stand By Me', 'Parasite', 'Alien']

// // //INTRO TO ARROW FUNCTIONS

// // // const square = (x) => {
// // //     return x * x;
// // // }

// // // const sum = (x, y) => {
// // //     return x + y;
// // // }

// // // const rollDie = () => {
// // //     return Math.floor(Math.random() * 6) + 1
// // // }

// // //IMPLICIT RETURN

// // //All these functions do the same thing:

// // const isEven = function (num) {   //regular function expression
// //     return num % 2 === 0;
// // }

// // const isEven = (num) => {    //arrow function with parens around param
// //     return num % 2 === 0;
// // }

// // const isEven = num => {      //no parens around param
// //     return num % 2 === 0;
// // }

// // const isEven = num => (      //implicit return
// //     num % 2 === 0
// // );

// // const isEven = num => num % 2 === 0;  //one-liner implicit return

// // SETTIMEOUTS AND SETINTERVALS

// // setTimeout(() => {
// //     console.log('HELLO!')
// // }, 3000)

// // const id = setInterval(() => {
// //     console.log(Math.random())
// // }, 2000)

// //make sure to set a clearInterval to stop this interval

// //THE FILTER METHOD

// // const nums = [9,8,7,6,5,4,3,2,1]
// // const odds = nums.filter(n => {
// //     return n % 2 === 1; //our callback returns true or false
// // }) //if it returns true, n is added to the filtered array
// // //[9, 7, 5, 3, 1]

// // const smallNums = nums.filter(n => n < 5);
// // //[4, 3, 2, 1]

// // const movies = [
// //     {
// //         title: 'Amadeus',
// //         score: 99,
// //         year: 1984
// //     },
// //     {
// //         title: 'Sharknado',
// //         score: 35,
// //         year: 2013
// //     },
// //     {
// //         title: '13 Going On 30',
// //         score: 70,
// //         year: 2004
// //     },
// //     {
// //         title: 'Stand By Me',
// //         score: 85,
// //         year: 1986
// //     },
// //     {
// //         totle: 'Waterworld',
// //         score: 62,
// //         year: 1995
// //     },
// //     {
// //         title: 'Jingle All The Way',
// //         score: 71,
// //         year: 1996
// //     },
// //     {
// //         title: 'Parasite',
// //         score: 95,
// //         year: 2019
// //     },
// //     {
// //         title: 'Notting Hill',
// //         score: 77,
// //         year: 1999
// //     },
// //     {
// //         title: 'Alien',
// //         score: 90,
// //         year: 1979
// //     }
// // ]

// // //I want an array of the higher rated movies

// // const goodMovies = movies.filter(m => m.score > 80);
// // const goodTitles = goodMovies.map(m => m.title);


// // const goodFiltMap = movies.filter(m => m.score > 80).map(m => m.title);
// // const badMovies = movies.filter(m => m.score < 70);

// // const recentMovies = movies.filter(m => m.year > 2000);

// //SOME & EVERY

// // const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// // words.every(word => {
// //     return word.length === 3;
// // }) //true

// // words.every(word => word[0] === 'd'); //false

// // words.every(w => {
// //     let last_letter = w[w.length - 1];
// //     return last_letter === 'g'
// // }) //true

// // const words = ['dogs', 'jello', 'log', 'cupcake', 'bag', 'wag']

// // //Are there any words longer than 4 character?
// // words.some(word => {
// //     return word.length > 4;
// // }) //true

// // //Do any words start with 'Z'?
// // words.some(word => word[0] === 'Z'); //false

// // //Do any words contain 'cake'?
// // words.some(w => w.includes('cake')) //true

// // const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// // exams.every(score => score >= 75) //true

// movies.some(movie => movie.year > 2015) //true

//THE NOTORIOUS REDUCE METHOD

// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce((total, price) => {
//     return total + price;
// })

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// }) //gives me the lowest value

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        totle: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

//I want to find the highest rated movie

const highestRated = movies.reduce((bestMovie, curMovie) => {
    if(curMovie.score > bestMovie.score) {
      return curMovie;  
    }
    return bestMovie;
}) 

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100) //120
//^^the 100 above is the 3rd argument for initial value

