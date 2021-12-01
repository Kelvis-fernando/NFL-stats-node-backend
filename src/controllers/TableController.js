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

        const nfcStage = [];
        const afcStage = [];

        const afcEast = [];
        const afcWest = [];
        const afcSouth = [];
        const afcNorth = [];
        const AFC = {
          North: afcNorth,
          East: afcEast,
          South: afcSouth,
          West: afcWest,
        };

        const nfcEast = [];
        const nfcWest = [];
        const nfcSouth = [];
        const nfcNorth = [];
        const NFC = {
          North: nfcNorth,
          East: nfcEast,
          South: nfcSouth,
          West: nfcWest,
        };

        const AFCTABLE = { AFC: AFC };
        const NFCTABLE = { NFC: NFC };
        response.data.forEach((el) => {
          if (el.Conference === 'NFC') {
            nfcStage.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Conference === 'AFC') {
            afcStage.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          }
        });

        nfcStage.forEach((el) => {
          if (el.Division === 'East') {
            nfcEast.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'North') {
            nfcNorth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'South') {
            nfcSouth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'West') {
            nfcWest.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          }
        });

        afcStage.forEach((el) => {
          if (el.Division === 'East') {
            afcEast.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'North') {
            afcNorth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'South') {
            afcSouth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'West') {
            afcWest.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          }
        });

        table.push(AFCTABLE, NFCTABLE);
        res.send(table);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default new TableController();
