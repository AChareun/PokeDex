/// <reference types="jquery" />

const $BOTON_BUSCAR = $("#boton-buscar");
const $INPUT_BUSCAR = $("#input-buscar");
const $BOTON_RANDOM = $("#boton-random");

let pokemon = undefined;

const tiposPokemon = {
    normal: `<span class="badge badge-secondary border border-dark">Normal</span>`,
    fighting: `<span class="badge badge-secondary border border-dark">Fighting</span>`,
    flying: `<span class="badge badge-light border border-dark">Flying</span>`,
    poison: `<span class="badge badge-dark border border-dark">Poison</span>`,
    ground: `<span class="badge badge-warning border border-dark">Ground</span>`,
    rock: `<span class="badge badge-warning border border-dark">Rock</span>`,
    bug: `<span class="badge badge-success border border-dark">Bug</span>`,
    ghost: `<span class="badge badge-dark border border-dark">Ghost</span>`,
    steel: `<span class="badge badge-secondary border border-dark">Steel</span>`,
    fire: `<span class="badge badge-danger border border-dark">Fire</span>`,
    water: `<span class="badge badge-primary border border-dark">Water</span>`,
    grass: `<span class="badge badge-success border border-dark">Grass</span>`,
    electric: `<span class="badge badge-warning border border-dark">Electric</span>`,
    psychic: `<span class="badge badge-light border border-dark">Psychic</span>`,
    ice: `<span class="badge badge-info border border-dark">Ice</span>`,
    dragon: `<span class="badge badge-danger border border-dark">Dragon</span>`,
    dark: `<span class="badge badge-dark border border-dark">Dark</span>`,
    fairy: `<span class="badge badge-success border border-dark">Fairy</span>`,
    unknown: `<span class="badge badge-light border border-dark">Unknown</span>`,
    shadow: `<span class="badge badge-dark border border-dark">Shadow</span>`
}
 
$BOTON_BUSCAR.click(() => {
    reiniciarEstado();

    const buscarPokemon = $INPUT_BUSCAR.val();

    fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}/`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        pokemon = respuesta
        const imagen = respuesta.sprites['front_default'];
        $("#contenedor-imagen").append(`<img src="${imagen}" >`);
        actualizarNombrePokemon();
        actualizarTiposPokemon();
        actualizarInfoPokemon();
        actualizarHabilidadesPokemon();
    })

})

$BOTON_RANDOM.click(() => {
    reiniciarEstado();
    const idRandom = Math.floor(Math.random() * 802)
    fetch(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        pokemon = respuesta;
        const imagen = respuesta.sprites['front_default'];
        $("#contenedor-imagen").append(`<img src="${imagen}" >`);
        actualizarNombrePokemon();
        actualizarTiposPokemon();
        actualizarInfoPokemon();
        actualizarHabilidadesPokemon();
    })
})

$(".botones-imagen").click((evento) => {
    const $boton = evento.target;
    const imagenes = {
        masculino: pokemon.sprites['front_default'],
        femenino: pokemon.sprites['front_female'],
        shiny: pokemon.sprites['front_shiny'],
        normal: pokemon.sprites['front_default']
    }
    if (imagenes[$boton.id] === null) {
        return;
    }else {
    $("#contenedor-imagen").empty().append(`<img src="${imagenes[$boton.id]}" >`);
    }
})

function reiniciarEstado() {
    pokemon = undefined;
    $("#contenedor-imagen").empty();
    $(".tipos-pokemon").empty();
    $("ul").remove(".card-text");
}

function actualizarNombrePokemon() {
    $("#nombre-pokemon").text(`#${pokemon.id} ${pokemon.name}`);
}

function actualizarTiposPokemon() {
    Object.keys(pokemon.types).forEach((key) => {
        $(".tipos-pokemon").append(tiposPokemon[pokemon.types[key].type.name]);    
    })
}

function actualizarInfoPokemon() {
    $("#info-poke").append(`<ul class="card-text h6">Weight: ${pokemon.weight}</ul>`);
    $("#info-poke").append(`<ul class="card-text h6">Height: ${pokemon.height}</ul>`);

}

function actualizarHabilidadesPokemon() {
    Object.keys(pokemon.abilities).forEach((key) => {
        $("#habilidades-poke").append(`<ul class="card-text h6">${pokemon.abilities[key].ability.name}</ul>`);
    })
}

