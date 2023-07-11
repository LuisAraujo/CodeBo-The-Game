// const axios = require("axios");
//import axios from "axios";

export default class CommonCode {
  static Post(url, json) {
    return axios
      .post(url, json)
      .then(() => {
        console.log("Dados enviados com sucesso!");
        console.log("Pode acessá-los através da rota: " + url);
      })
      .catch((error) => {
        console.log(error.responseText);
      });
  }

  static Get(url) {
    return axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static get API_HOST() {
    return "https://glboardapi.azurewebsites.net/";
  }
}
