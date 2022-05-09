let newDivBeers = document.getElementById("main");

async function getBeers() {
  try {
    /**
     * Requete (GET) pour chercher les element sur l'API BIER
     */

    const beerList = await axios.get("https://api.punkapi.com/v2/beers");
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
           
           
            <button id="myBtn" data-bs-target="#${beer.id}">
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
}

await getBeers();

var modal = document.getElementById("myModal");

// open modal button
var btn = document.getElementById("myBtn");

// close modal button
var span = document.getElementsByClassName("close")[0];

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

// async function getBeers() {
//   try {
//     const response = await axios.get("https://api.punkapi.com/v2/beers");
//     console.log("reponse", response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// await getBeers()

{
  /* <div class="modal fade" id="${beer.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>hey</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div> */
}
