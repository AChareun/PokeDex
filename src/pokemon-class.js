class Pokemon {
  constructor({
    name, id, sprites, height, weight, types, abilities, stats,
  }) {
    this.name = name;
    this.id = id;
    this.sprites = sprites;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.stats = stats;
  }
}

export default Pokemon;
