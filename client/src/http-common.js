import axios from "axios";
export default axios.create({
  baseURL: "https://iwastechcasestudy.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});