import { Router } from 'express';

const router = new Router();

router.get('/partidas', (req, res) => {
  res.send('Ola mundo partidas');
});

export default router;
