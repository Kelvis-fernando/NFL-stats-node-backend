import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/partidas', (req, res) => {
  res.send('PARTIDAS');
});

router.get('/estatisticas', (req, res) => {
  res.send('estatisticas');
});

router.get('/tabela', (req, res) => {
  res.send('tabela');
});

export default router;
