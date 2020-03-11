import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  signup({ username, email, password }) {
    return this.auth
      .post("/auth/signup", { username, email,password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }

  admin() {
    return this.auth.get("/auth/admin").then(({ data }) => data);
    // return this.auth.get("/auth/admin").then((response) => response.data);
  }

}

const authService = new Auth();
// `authService` is the object with the above axios request methods

export default authService;
