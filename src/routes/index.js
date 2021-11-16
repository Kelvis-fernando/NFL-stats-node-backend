import { Router } from 'express';
import axios from 'axios';
import 'dotenv/config';

const router = new Router();

router.get('/', (req, res) => {
  res.send('Home');
});

router.get('/partidas', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  axios.get('https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2021/10', {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.SECRET_API_KEY,
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
