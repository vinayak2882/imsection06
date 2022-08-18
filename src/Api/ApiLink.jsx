import axios from "axios";

export default axios.create({
  baseURL: "https://masai-api-mocker.herokuapp.com/",
});