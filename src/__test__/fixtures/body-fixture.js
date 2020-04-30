const bodyFixture = `<header class="container">
<div class="row">
    <div class="col bg-dark d-flex justify-content-center border border-secondary">
        <h1 class="h1 header">PokéApi</h1>
    </div>
</div>
</header>

<div class="container" id="button-section">
<div class="row d-flex justify-content-center">
    <button class="col-sm-4 btn btn-dark my-3 border border-secondary" type="button" id="random-button">Random Pokémon</button>
    <div class="col-sm-4 input-group my-3">
        <div class="input-group-prepend">
          <button class="btn btn-dark border border-secondary" type="button" id="search-button">Search Pokémon</button>
        </div>
        <input type="text" class="form-control border border-secondary" placeholder="ID or Name" aria-describedby="search-button" id="search-input">
    </div>
</div>
<div class="alert bg-dark occult" id="loading"><h1 class="h3 text-light d-flex justify-content-center">Loading...</h1></div>
</div>

<div class="container" id="display-info-top">
<div class="row">
    <div class="col-sm-7 mt-3 d-flex justify-content-center">
        <div class="col-sm-5 mx-0 p-0">
            <div class="bg-dark border border-secondary col-sm mx-0" id="img-container" data-gender="male" data-color="normal"></div>
            <div class="d-flex justify-content-left" id="primary-info">
                <button type="button" class="btn btn-dark" id="btn-backw"><</button>
                <div class="alert-secondary border border-secondary col-sm d-inline primary-info"></div>
                <button type="button" class="btn btn-dark" id="btn-forw">></button>
            </div>
        </div>
        <div class="col-sm-1 mx-0 px-0 img-buttons">
            <div class="btn-group-vertical" id="sprites-buttons">
                <button type="button" class="btn btn-secondary border border-dark" id="male">♂</button>
                <button type="button" class="btn btn-secondary border border-dark" id="female">♀</button>
                <button type="button" class="btn btn-secondary border border-dark" id="shiny">Shiny</button>
                <button type="button" class="btn btn-secondary border border-dark" id="normal">Normal</button>
            </div>
        </div>
    </div>
    <div class="col-sm-3 mt-3 d-inline">
        <div class="card alert-secondary border border-dark">
          <div class="card-body" id="info-poke">
            <h5 class="card-title h5">More Info:</h5>
          </div>
        </div>
        <div class="card alert-secondary border border-dark">
            <div class="card-body" id="abilities-poke">
                <h5 class="card-title h5">Abilities:</h5>
            </div>
        </div>
    </div>
</div>
</div>

<div class="container" id="display-info-bot">
<div class="row d-flex justify-content-sm-center mt-5">
    <div id="bar" class="bg-dark border border-secondary col-sm-6">
        <h5>Stats</h5>
        <div class="bar-speed">Speed</div>
        <div class="bar-sp-def">Spec Def</div>
        <div class="bar-sp-att">Spec Att</div>
        <div class="bar-defense">Defense</div>
        <div class="bar-attack">Attack</div>
        <div class="bar-hp">HP</div>
    </div>
</div>
</div>`;

export default bodyFixture;
