import axios from 'axios';

function httpRequest() {
  axios.get('http://localhost:3001/partidas').then((resp) => {
    console.log(resp);
  });
}

export default httpRequest();
