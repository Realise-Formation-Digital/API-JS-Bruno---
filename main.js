

async function getBeers() {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers');
      console.log("reponse",response);
    } catch (error) {
      console.error(error);
    }
  }


  await getBeers();