/* eslint-disable no-undef */
// / <reference types="jquery" />

const $BOTON_BUSCAR = $('#boton-buscar');
const $INPUT_BUSCAR = $('#input-buscar');
const $BOTON_RANDOM = $('#boton-random');

let pokemon;

function reiniciarEstado() {
  pokemon = undefined;
  $('#contenedor-imagen').empty();
  $('.tipos-pokemon').empty();
  $('ul').remove('.card-text');
}

function actualizarNombrePokemon() {
  $('#nombre-pokemon').text(`#${pokemon.id} ${pokemon.name}`);
}

function actualizarTiposPokemon() {
  Object.keys(pokemon.types).forEach((key) => {
    $('.tipos-pokemon').append(`<span class="type-icon type-${pokemon.types[key].type.name}">${pokemon.types[key].type.name}</span>`);
  });
}

function actualizarInfoPokemon() {
  $('#info-poke').append(`<ul class="card-text h6">Weight: ${pokemon.weight}</ul>`);
  $('#info-poke').append(`<ul class="card-text h6">Height: ${pokemon.height}</ul>`);
}

function actualizarHabilidadesPokemon() {
  Object.keys(pokemon.abilities).forEach((key) => {
    $('#habilidades-poke').append(`<ul class="card-text h6">${pokemon.abilities[key].ability.name}</ul>`);
  });
}


$BOTON_BUSCAR.click(() => {
  reiniciarEstado();

  const buscarPokemon = $INPUT_BUSCAR.val();

  fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}/`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      pokemon = respuesta;
      const imagen = respuesta.sprites.front_default;
      $('#contenedor-imagen').append(`<img src="${imagen}" >`);
      actualizarNombrePokemon();
      actualizarTiposPokemon();
      actualizarInfoPokemon();
      actualizarHabilidadesPokemon();
    });
});

$BOTON_RANDOM.click(() => {
  reiniciarEstado();
  const idRandom = Math.floor(Math.random() * 802);
  fetch(`https://pokeapi.co/api/v2/pokemon/${idRandom}/`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      pokemon = respuesta;
      const imagen = respuesta.sprites.front_default;
      $('#contenedor-imagen').append(`<img src="${imagen}" >`);
      actualizarNombrePokemon();
      actualizarTiposPokemon();
      actualizarInfoPokemon();
      actualizarHabilidadesPokemon();
    });
});

$('.botones-imagen').click((evento) => {
  const $boton = evento.target;
  const imagenes = {
    masculino: pokemon.sprites.front_default,
    femenino: pokemon.sprites.front_female,
    shiny: pokemon.sprites.front_shiny,
    normal: pokemon.sprites.front_default,
  };
  if (imagenes[$boton.id] === null) {
    return;
  }
  $('#contenedor-imagen').empty().append(`<img src="${imagenes[$boton.id]}" >`);
});
