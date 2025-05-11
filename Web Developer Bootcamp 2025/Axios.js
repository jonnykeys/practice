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


const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    console.log(res.data.joke)
}

getDadJoke();