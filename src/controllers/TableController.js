import axios from 'axios';
import 'dotenv/config';

class TableController {
  index(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Standings/2021', {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SECRET_API_KEY,
      },
    })
      .then((response) => {
        const table = [];
        response.data.forEach((el) => {
          table.push({
            Name: el.Name,
            Conference: el.Conference,
            Division: el.Division,
            Wins: el.Wins,
            Losses: el.Losses,
            Ties: el.Ties,
          });
        });
        res.send(table);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default new TableController();
