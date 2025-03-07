//If you think a code could result in an error, use try/catch

// hello.toUppercase(); //this code alone would be an error

// try {
//     hello.toUppercase();
// } catch {
//     console.log('ERROR!')
// }

// function yell(msg) {
//     console.log(msg.toUpperCase().repeat(3));
// }

//The above code will error out if you put in a number
//use try/catch could be used to check for this

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log('Please use a string!');
    }
}