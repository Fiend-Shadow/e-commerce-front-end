import axios from "axios";

class Search {
  constructor() {
    this.search = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  productByName({ productName} ) {
    return this.search
      .post("/product/searchPage", { productName })
      .then(({ data }) => data)
    // .then((response) => response.data);
  }
}

const searchService = new Search();
// // `searchService` is the object with the above axios request methods

export default searchService;