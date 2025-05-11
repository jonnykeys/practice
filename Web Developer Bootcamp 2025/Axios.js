// axios.get("https://pokeapi.co/api/v2/pokemon/charmander")
//     .then(res => {
//         console.log("RESPONSE:", res);
//     });
// .catch (e => {
//     console.log("ERROR:", e);
// });

// const getPokemon = async (id) => {
//     try {
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR:", e);
//     }
// };

// getPokemon("charizard");
// getPokemon(9);


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}
    button.addEventListener('click', addNewJoke)