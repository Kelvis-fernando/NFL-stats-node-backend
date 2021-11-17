import axios from 'axios';
import 'dotenv/config';

class HomeController {
  index(req, res) {
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
        const returData = [];
        resp.data.forEach((el) => {
          returData.push({
            Date: el.Date,
            Week: el.Week,
            Team: el.Team,
            TeamName: el.TeamName,
            Opponent: el.Opponent,
            Score: el.ScoreQuarter1 + el.ScoreQuarter2 + el.ScoreQuarter3 + el.ScoreQuarter4,
            ScoreOpponent: el.OpponentScoreQuarter1 + el.OpponentScoreQuarter2 + el.OpponentScoreQuarter3 + el.OpponentScoreQuarter4,
          });
        });
        res.send(returData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new HomeController();
