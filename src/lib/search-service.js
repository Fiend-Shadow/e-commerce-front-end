// import axios from "axios";

// class Search {
//   constructor() {
//     this.auth = axios.create({
//       baseURL: "http://localhost:5000",
//       withCredentials: true
//     });
//   }

//   searchFood = searchValue =>{
//     const filterFoodList = this.state.foodsList.filter(element =>{
//       const lowerFood = element.name.toLowerCase();
//       return lowerFood.includes(searchValue.toLowerCase());
//     });
//     console.log("filterfoodlist", filterFoodList);
//     this.setState({filterFoodList: filterFoodList});
//   }


//   signup({ username, email, password }) {
//     return this.auth
//       .post("/auth/signup", { username, email,password })
//       .then(({ data }) => data);
//     // .then((response) => response.data);
//   }

// }

// const searchService = new Search();
// // `searchService` is the object with the above axios request methods

// export default searchService;