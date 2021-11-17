import { Router } from 'express';
import matchesController from '../controllers/MatchesController';
import homeController from '../controllers/HomeController';
import statsController from '../controllers/StatsController';
import tableController from '../controllers/TableController';

const router = new Router();

router.get('/', homeController.index);

router.get('/partidas', matchesController.index);

router.get('/estatisticas', statsController.index);

router.get('/tabela', tableController.index);

export default router;
