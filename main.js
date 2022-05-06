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
            <h5 class="card-title">Name: ${beer.name}</h5>
            <p class="card-text">
              Description:${beer.description}
            </p>
           
           
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${beer.id}">
             More info
            </button>
           
           
            <div class="modal fade" id="${beer.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

// async function getBeers() {
//   try {
//     const response = await axios.get("https://api.punkapi.com/v2/beers");
//     console.log("reponse", response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// await getBeers()
