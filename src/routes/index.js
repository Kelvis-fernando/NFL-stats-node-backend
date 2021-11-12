import { Router } from 'express';
import axios from 'axios';

const router = new Router();

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/partidas', (req, res) => {
  axios.get('https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2021/8', {
    headers: {
      'Ocp-Apim-Subscription-Key': 'c00c2adab1cb4775965c58a43cb3e5f5',
    },
  })
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/estatisticas', (req, res) => {
  res.send('estatisticas');
});

router.get('/tabela', (req, res) => {
  res.send('tabela');
});

export default router;
