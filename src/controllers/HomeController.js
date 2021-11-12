import express from 'express';
import axios from 'axios';

class Controller {
  constructor() {
    this.app = express();
    this.httpRequest();
  }

  httpRequest() {
    axios.get('http://localhost:3001/partidas').then((resp) => {
      console.log(resp);
    });
  }
}

export default new Controller().app;
