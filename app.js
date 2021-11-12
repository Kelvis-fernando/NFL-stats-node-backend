import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import matchesRoutes from './src/routes/matchesRoutes';

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
    this.app.use('/', homeRoutes);
    this.app.use('/partidas', matchesRoutes);
  }
}

export default new App().app;
