import Axios from 'axios';

class HomeController {
  index(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    Axios.get('https://api.sportsdata.io/v3/nfl/scores/json/Teams', {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.SECRET_API_KEY,
      },
    })
      .then((response) => {
        res.send(response.data);
      }, (error) => {
        console.log(error);
      });
  }
}

export default new HomeController();
