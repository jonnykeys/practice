// Password must be 6+ characters //
//Password cannot include space //

const password = prompt("Enter New Password");

if(password.length >= 6) {
    console.log("Long enough password")
} else {
    console.log("Password too short. Must be 6+ characters")
}

if(password.indexOf(" ") === -1){
    console.log("Good job! No space!")
} else {
    console.log("Password cannot contain spaces!")
}