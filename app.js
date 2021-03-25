
// HTML elements
const submit = document.querySelector('#submit');
const input = document.querySelector('input');
const pokemonName = document.querySelector('.name');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const types = document.querySelector('.types')

//const evolveBtn = document.querySelector('.evolveBtn')

submit.onclick = async () => {
    const api = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        name: input.value,
    }
    const endPoint = `${api.url}${api.type}/${api.name.toLowerCase()}` 
    const response = await fetch(endPoint); 
    
    //Handle request error
    if(!response.ok){
        pokemonName.innerHTML = 'Unable to get pokemon'
        height.innerHTML = ''
        weight.innerHTML = ''
        types.innerHTML = ''
        document.querySelector('img').src = ''
    }
    else{
        const result = await response.json();
        console.log(result)
        pokemonName.innerHTML  = result.name;
        document.querySelector('img').src = result.sprites.front_shiny;
        height.innerHTML = 'Height: ' + result.height;
        weight.innerHTML = 'Weight: ' + result.weight;
        types.innerHTML = 'Type(s): '
        for(let i=0; i< result.types.length; i++){
                types.innerHTML +=  `${result.types[i].type.name} ` 
            }
    }




}


// const testFunc = async () => {
//     const url = 'https://pokeapi.co/api/v2/pokemon/charmander'
    
//     const response = await fetch(url)
//     const result = await response.json();

//     //try to get evolution chain
//     const chainUrl = `https://pokeapi.co/api/v2/evolution-chain/2/`
    
//     const chainRes = await fetch(chainUrl)
//     const chainResult = await chainRes.json()
//     let evoData = chainResult.chain;
//     let firstEvo = evoData['evolves_to'][0].species.name //first upgrade (charmeleon)
//     let secondEvo = evoData['evolves_to'][0].evolves_to[0].species.name  // second

//     // console.log(result.name)
//     // console.log(firstEvo)
//     // console.log(secondEvo)


//         pokemonName.innerHTML  = result.name;
//         document.querySelector('img').src = result.sprites.front_shiny;
//         height.innerHTML = 'Height: ' + result.height;
//         weight.innerHTML = 'Weight: ' + result.weight;
    
//         for(let i=0; i< result.types.length; i++){
//                 types.innerHTML += `${result.types[i].type.name} ` 
//             }
//     evolveBtn.onclick = async () => {
//             nextUrl = `https://pokeapi.co/api/v2/pokemon/${firstEvo}`;
//             const nextResponse = await fetch(nextUrl)
//             const nextResult = await nextResponse.json();

//             pokemonName.innerHTML  = nextResult.name;
//             document.querySelector('img').src = nextResult.sprites.front_shiny;
//             height.innerHTML = 'Height: ' + nextResult.height;
//             weight.innerHTML = 'Weight: ' + nextResult.weight;
        
//             for(let i=0; i< nextResult.types.length; i++){
//                     types.innerHTML += `${nextResult.types[i].type.name} ` 
//                 }
//     }
// }

// testFunc()