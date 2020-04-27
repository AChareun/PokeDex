function updateStatsBars(pokemon) {
  const $BARS = document.querySelectorAll('#bar div');

  $BARS.forEach(($bar, i) => {
    const $newBar = $bar;
    const pokeStat = pokemon.stats[i].stat.name;
    const pokeStatValue = pokemon.stats[i].base_stat;

    $newBar.textContent = `${pokeStat} ${pokeStatValue}`;
    $newBar.style = pokeStatValue > 100 ? 'width: 100%' : `width: ${pokeStatValue}%`;
  });
}

export default updateStatsBars;
