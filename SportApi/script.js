const $selectSport = document.querySelector("#select-sport");
const $selectCountries = document.querySelector("#select-countries");
const $selectLeagues = document.querySelector("#select-leagues");
const $selectTeams = document.querySelector("#select-teams");
const $imgTeam = document.querySelector("#img-team");
const $containerPlayers = document.querySelector("#container-players");

const APIkey =
  "63f7024660223468726b78dfab1492174a636e43da60855fd7067c9bbaebc06b";
const urlBase = "https://apiv2.allsportsapi.com/";

const getCountries = async (sport) => {
  const response = await fetch(
    `${urlBase}${sport}/?met=Countries&APIkey=${APIkey}`
  );
  return response.json();
};

const getLeagues = async (sport, countryId) => {
  const response = await fetch(
    `${urlBase}${sport}?met=Leagues&countryId=${countryId}&APIkey=${APIkey}`
  );
  return response.json();
};

const getTeams = async (sport, leagueId) => {
  const response = await fetch(
    `${urlBase}${sport}/?met=Teams&leagueId=${leagueId}&APIkey=${APIkey}`
  );
  return response.json();
};

const paintPlayers = (players) => {
  $containerPlayers.innerHTML = "";
  players.forEach(({ player_name, player_image, player_key }) => {
    const structureCard = `
    <div class="card" style="width: 10rem;height:fit-content;">
          <img src="${player_image}"
            class="card-img-top" alt="img-player" id="imgCard">
          <div class="card-body bg-dark bg-gradient" style="--bs-bg-opacity: .1;">
            <p class="card-text fw-bold text-center">${player_name}</p>
          </div>
        </div>
    `;
    $containerPlayers.innerHTML += structureCard;
  });
};

/* 
Endpoint Países
https://apiv2.allsportsapi.com/football/?met=Countries&APIkey={{}}

Endpoint Ligas
https://apiv2.allsportsapi.com/football/?met=Leagues&countryId=10&APIkey={{}}

Endpoint Equipos
https://apiv2.allsportsapi.com/football?met=Teams&leagueId=33&APIkey={{}}
*/

let sportSelected;
$selectSport.addEventListener("change", async (e) => {
  sportSelected = e.target.value;
  const { result } = await getCountries(sportSelected);
  $selectCountries.disabled = false;
  $selectCountries.innerHTML =
    "<option value='' selected hidden>Seleccionar</option>";
  result.forEach(({ country_key, country_name }) => {
    $selectCountries.innerHTML += `<option value="${country_key}">${country_name}</option>`;
  });
});

$selectCountries.addEventListener("change", async (e) => {
  const countrySelected = e.target.value;
  const { result } = await getLeagues(sportSelected, countrySelected);
  $selectLeagues.disabled = false;
  $selectLeagues.innerHTML =
    "<option value='' selected hidden>Seleccionar</option>";
  result.forEach(({ league_key, league_name }) => {
    $selectLeagues.innerHTML += `<option value="${league_key}">${league_name}</option>`;
  });
});

$selectLeagues.addEventListener("change", async (e) => {
  const leagueSelected = e.target.value;
  const { result } = await getTeams(sportSelected, leagueSelected);
  $selectTeams.disabled = false;
  $selectTeams.innerHTML =
    "<option value='' selected hidden>Seleccionar</option>";
  result.forEach(({ team_key, team_name }) => {
    $selectTeams.innerHTML += `<option value="${team_key}">${team_name}</option>`;
  });

  $selectTeams.addEventListener("change", (e) => {
    const teamSelected = e.target.value;

    console.log("teamSelected", typeof teamSelected);
    const { team_logo, players } = result.find(
      (team) => team.team_key === parseInt(teamSelected)
    );

    $imgTeam.src = team_logo;
    paintPlayers(players);

    const $imagesPlayers = document.querySelectorAll(`#imgCard`);
    console.log($imagesPlayers);

    const arrElementImages = Array.from($imagesPlayers);

    arrElementImages.forEach((img) => {
      img.addEventListener("error", () => {
        img.src =
          "https://www.pngitem.com/pimgs/m/551-5510463_default-user-image-png-transparent-png.png";
      });
    });
  });
});