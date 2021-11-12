import express from 'express';
import Routes from './src/routes/index';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', Routes);
    this.app.use('/partidas', Routes);
    this.app.use('/estatisticas', Routes);
    this.app.use('/tabela', Routes);
  }
}

export default new App().app;
