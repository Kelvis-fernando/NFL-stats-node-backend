import express from 'express';

class Controller {
  constructor() {
    this.app = express();
  }
}

export default new Controller().app;
