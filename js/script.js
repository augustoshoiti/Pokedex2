const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const pokemonTipo1 = document.querySelector('#tipo1')
const pokemonTipo2 = document.querySelector('#tipo2')
const pokemonHp = document.querySelector('#hp')
const pokemonAtk = document.querySelector('#atk')
const pokemonDef = document.querySelector('#def')
const pokemonSp_Atk = document.querySelector('#sp-atk')
const pokemonSp_Def = document.querySelector('#sp-def')
const pokemonVel = document.querySelector('#vel')
const pokemonPeso = document.querySelector('#peso')
const pokemonAltura = document.querySelector('#h')

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'carregando...';
    pokemonNumber.innerHTML = '';
    pokemonImage.src = 'image/loading.png ';
    pokemonTipo1.innerHTML = '----';
    pokemonTipo2.innerHTML = '----';
    pokemonHp.innerHTML = 'Hp: ???';
    pokemonAtk.innerHTML = 'Ataque: ???';
    pokemonDef.innerHTML = 'Defesa: ???';
    pokemonSp_Atk.innerHTML = 'Ataque esp: ???';
    pokemonSp_Def.innerHTML = 'Defesa esp: ???';
    pokemonVel.innerHTML = 'Velocidade: ???';
    pokemonPeso.innerHTML = 'Peso: ???';
    pokemonAltura.innerHTML = 'Altura: ???';

    const data = await fetchPokemon(pokemon);

    if (data) {
        let cal1 = (data['weight'] * 10) / 100 + 'kg';
        let cal2 = (data['height'] * 10) / 100 + 'm';

        searchPokemon = data.id;

        input.value = '';
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.species.name;
        pokemonNumber.innerHTML = "#" + data.id;
        pokemonImage.src = data['sprites']['other']['official-artwork']['front_default'];

        pokemonHp.innerHTML = 'Hp: ' + data['stats']['0']['base_stat'];
        pokemonAtk.innerHTML = 'Ataque: ' + data['stats']['1']['base_stat'];
        pokemonDef.innerHTML = 'Defesa: ' + data['stats']['2']['base_stat'];
        pokemonVel.innerHTML = 'Velocidade: ' + data['stats']['5']['base_stat'];

        pokemonPeso.innerHTML = 'Peso: ' + cal1;
        pokemonAltura.innerHTML = 'Altura: ' + cal2;

        pokemonSp_Atk.innerHTML = 'Ataque esp: ' + data['stats']['3']['base_stat'];
        pokemonSp_Def.innerHTML = 'Defesa esp: ' + data['stats']['4']['base_stat'];

       
        pokemonTipo1.innerHTML = data['types']['0']['type']["name"];
        pokemonTipo2.innerHTML = data['types']['1']['type']["name"];

        // let tipo2 = data['types']['1']['type']["name"];
        // let tipo1 = data['types']['0']['type']["name"];
        // switch (tipo1) {
        //     case "bug":
        //         pokemonTipo1.style.background = "#90C12D";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "dark":
        //         pokemonTipo1.style.background = "#5A5366";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "dragon":
        //         pokemonTipo1.style.background = "#0969C1";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "electric":
        //         pokemonTipo1.style.background = "#F4D23C";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "fairy":
        //         pokemonTipo1.style.background = "#ED8DE6";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "fighting":
        //         pokemonTipo1.style.background = "#CF3E68";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "fire":
        //         pokemonTipo1.style.background = "#FF9C54";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "flying":
        //         pokemonTipo1.style.background = "#91ABDE";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "ghost":
        //         pokemonTipo1.style.background = "#9AB0EE";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "grass":
        //         pokemonTipo1.style.background = "#60B954";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "ground":
        //         pokemonTipo1.style.background = "#D97745";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "ice":
        //         pokemonTipo1.style.background = "#73CEC0";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "normal":
        //         pokemonTipo1.style.background = "#9099A1";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "poison":
        //         pokemonTipo1.style.background = "#A666C7";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "psychic":
        //         pokemonTipo1.style.background = "#F86E74";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "rock":
        //         pokemonTipo1.style.background = "#C7B78B";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "steel":
        //         pokemonTipo1.style.background = "#4F889B";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     case "water":
        //         pokemonTipo1.style.background = "#5398D7";
        //         pokemonTipo1.style.border = "1px solid black";
        //         break;
        //     default:
        //         pokemonTipo1.style.background = "#FFFFFF";
        //         pokemonTipo1.style.border = "1px solid black";
        // }
        // switch (tipo2) {
        //     case "bug":
        //         pokemonTipo2.style.background = "#90C12D";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "dark":
        //         pokemonTipo2.style.background = "#5A5366";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "dragon":
        //         pokemonTipo2.style.background = "#0969C1";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "electric":
        //         pokemonTipo2.style.background = "#F4D23C";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "fairy":
        //         pokemonTipo2.style.background = "#ED8DE6";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "fighting":
        //         pokemonTipo2.style.background = "#CF3E68";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "fire":
        //         pokemonTipo2.style.background = "#FF9C54";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "flying":
        //         pokemonTipo2.style.background = "#91ABDE";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "ghost":
        //         pokemonTipo2.style.background = "#9AB0EE";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "grass":
        //         pokemonTipo2.style.background = "#60B954";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "ground":
        //         pokemonTipo2.style.background = "#D97745";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "ice":
        //         pokemonTipo2.style.background = "#73CEC0";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "normal":
        //         pokemonTipo2.style.background = "#9099A1";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "poison":
        //         pokemonTipo2.style.background = "#A666C7";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "psychic":
        //         pokemonTipo2.style.background = "#F86E74";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "rock":
        //         pokemonTipo2.style.background = "#C7B78B";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "steel":
        //         pokemonTipo2.style.background = "#4F889B";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     case "water":
        //         pokemonTipo2.style.background = "#5398D7";
        //         pokemonTipo2.style.border = "1px solid black";
        //         break;
        //     default:
        //         pokemonTipo2.style.background = "#FFFFFF";
        // }
       
    } else {
        input.value = '';
        pokemonImage.src = './image/erro.png';
        pokemonName.innerHTML = 'Not found'
        pokemonNumber.innerHTML = '😰'
        pokemonTipo1.innerHTML = '???';
        // pokemonTipo1.style.background = "";
        // pokemonTipo1.style.border = "";
        // pokemonTipo2.style.background = "";
        // pokemonTipo2.style.border = "";
        pokemonTipo2.innerHTML = '???';
        pokemonHp.innerHTML = 'Hp: ???';
        pokemonAtk.innerHTML = 'Ataque: ???';
        pokemonDef.innerHTML = 'Defesa: ???';
        pokemonSp_Atk.innerHTML = 'Ataque esp: ???';
        pokemonSp_Def.innerHTML = 'Defesa esp: ???';
        pokemonVel.innerHTML = 'Velocidade: ???';
        pokemonPeso.innerHTML = 'Peso: ???';
        pokemonAltura.innerHTML = 'Altura: ???';
    }
}

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click' , () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
    
});

buttonNext.addEventListener('click' , () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);