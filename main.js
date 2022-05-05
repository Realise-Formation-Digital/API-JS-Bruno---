let newDivBeers = document.getElementById("main");
// let newDivInfo = document.getElementById("");

async function getBeers() {
  try {
    /**
     * Requete (GET) pour chercher les element sur l'API
     */

    const beerList = await axios.get("https://api.punkapi.com/v2/beers");
    console.log(beerList);

    // const infoList = await axios.get("");

    /**
     * Boucle FOR OF pour parcourir l'ARRAY beerList.data et afficher les BIERS
     *
     * @data  [id, nom, groupe]
     *
     */
    for (const artist of beerList.data) {
      console.log(beerList.data);

      divArtiste.innerHTML += `
        `;
    }

    /**
     * Boucle FOR OF pour parcourir l'ARRAY List.data et afficher les
     *
     * @data[id, nom, url]
     *
     */
    // for (const  of List.data) {
    //   console.log(List.data);

    newDivBeers.innerHTML += `
      <ul>
        <li>
          <div class="card" style="width: 18rem">
            <img src="Img/beer.gif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </li>
      </ul>`;
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
