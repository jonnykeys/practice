const testScores = {
    Jon: 26,
    Alisha: 38,
    Nok: 32.5,
    Mango: 40,
    Caleb: 40.5,
    Ross: 38.5,
    Tanner: 30,
    Dom: 52.5,
    Dishman: 33,
    Dave: 35,
    Ethan: 34,
    Mosier: 38,
    Brett: 44,
    Kaden: 37,
    Josh: 36,
    Brenna: 47.5
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(`Average Score: ${total / scores.length}`)