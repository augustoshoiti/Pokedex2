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

        
        
    } else {
        input.value = '';
        pokemonImage.src = './image/erro.png';
        pokemonName.innerHTML = 'Not found'
        pokemonNumber.innerHTML = '😰'
        pokemonTipo1.innerHTML = '???';
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
