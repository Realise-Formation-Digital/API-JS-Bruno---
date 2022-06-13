import {rootUrl} from "./axios";

let newDivBeers = document.getElementById("main");

async function getBeers() {
  try {
    /**
     * Requete (GET) pour chercher les element sur l'API BIER
     */

    const beerList = await axios.get("rootUrl");
    console.log(beerList);

    /**
     * Boucle FOR OF pour parcourir l'ARRAY beerList.data et afficher les BIERS
     *
     * @data  [id, name, tagline, first_brewed, description]
     *
     */
    for (const beer of beerList.data) {
      // console.log(beer);

      newDivBeers.innerHTML += `<ul>
      <li>
        <div class="card" style="width: 18rem">
          <img src="${beer.image_url}" class="card-img-top" alt="..."  />
          <div class="card-body">
            <h5 class="card-title">Name: ${beer.name}</h5><br>
            <p class="card-text">
              DESCRIPTION: <br>${beer.description}
            </p>
           
           
            <button id="myBtn" data-target="#${beer.id}">
             More info
            </button>
           
            <!-- The Modal -->
            <div id="myModal" class="modal">
            
              <!-- Modal content -->
              <div class="modal-content">
                <span class="close"></span>
                <p>ABV:<br> ${beer.abv}</p>
                <p>ATTENUATION LEVEL:<br> ${beer.attenuation_level}</p>
                <p>BOIL VOLUME:<br> ${beer.boil_volume}</p>
                <p>BREWERS TIPS:<br> ${beer.brewers_tips}</p>
                <p>CONTRINUTED BY:<br> ${beer.contributed_by}</p>
                <p>FIRST BREWED:<br> ${beer.first_brewed}</p>
              </div>
            
            </div>
          </div>
        </div>
      </li>
    </ul>`;
    }
  } catch (error) {
    console.log(error);
  }
  
  let modal = document.getElementById("myModal");

  // open modal button
  let btn = document.getElementById("myBtn");

  // close modal button
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
await getBeers();

// async function getBeers() {
//   try {
//     const response = await axios.get("https://api.punkapi.com/v2/beers");
//     console.log("reponse", response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// await getBeers()

