import axios from 'axios';
import 'dotenv/config';

class TableController {
  index(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    // https://api.sportsdata.io/v3/nfl/scores/json/Teams;
    const iconTeams = [];
    axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Teams')
      .then((response) => {
        iconTeams.push({
          FullName: response.data.FullName,
          Logo: response.data.WikipediaLogoUrl,
          PrimaryColor: response.data.PrimaryColor,
        });
      }, (error) => {
        console.log(error);
      });

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
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                nfcEast.push({ Logo: iconTeams.Logo });
              }
            });
            nfcEast.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'North') {
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                nfcNorth.push({ Logo: iconTeams.Logo });
              }
            });
            nfcNorth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'South') {
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                nfcSouth.push({ Logo: iconTeams.Logo });
              }
            });
            nfcSouth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'West') {
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                nfcWest.push({ Logo: iconTeams.Logo });
              }
            });
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
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                afcEast.push({ Logo: iconTeams.Logo });
              }
            });
            afcEast.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'North') {
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                afcNorth.push({ Logo: iconTeams.Logo });
              }
            });
            afcNorth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'South') {
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                afcSouth.push({ Logo: iconTeams.Logo });
              }
            });
            afcSouth.push({
              Name: el.Name,
              Conference: el.Conference,
              Division: el.Division,
              Wins: el.Wins,
              Losses: el.Losses,
              Ties: el.Ties,
            });
          } else if (el.Division === 'West') {
            iconTeams.forEach((element) => {
              if (element.FullName === el.Name) {
                afcWest.push({ Logo: iconTeams.Logo });
              }
            });
            afcWest.push({ Logo: iconTeams.Logo });
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
