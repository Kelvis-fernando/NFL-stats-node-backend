import axios from 'axios';
import 'dotenv/config';

class StatsController {
  index(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    let currentlyWeekAndSeason = {};

    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek', {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SECRET_API_KEY,
      },
    })
      .then((week) => {
        console.log(week.data);
        currentlyWeekAndSeason = { Week: week.data };
        const baseUrl = `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2021/${currentlyWeekAndSeason.Week}`;
        console.log(baseUrl);
      })
      .catch((error) => {
        console.log(error);
      });

    const baseUrl = 'https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2021/13';

    axios.get(baseUrl, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SECRET_API_KEY,
        'Content-Type': 'application / json',
      },
    })
      .then((response) => {
        const stats = [];
        response.data.forEach((el) => {
          stats.push({
            TeamName: el.TeamName,
            OffensivePlays: el.OffensivePlays,
            OffensiveYards: el.OffensiveYards,
            OffensiveYardsPerPlay: el.OffensiveYardsPerPlay,
            Touchdowns: el.Touchdowns,
            PassingYards: el.PassingYards,
            PassingTouchdowns: el.PassingTouchdowns,
            PassingInterceptions: el.PassingInterceptions,
            CompletionPercentage: el.CompletionPercentage,
            Penalties: el.Penalties,
            Fumbles: el.Fumbles,
            TimesSacked: el.TimesSacked,
            QuarterbackHits: el.QuarterbackHits,
            Kickoffs: el.Kickoffs,
            Sacks: el.Sacks,
            PassingDropbacks: el.PassingDropbacks,
            FirstDowns: el.FirstDowns,
          });
        });
        res.send(stats);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new StatsController();
