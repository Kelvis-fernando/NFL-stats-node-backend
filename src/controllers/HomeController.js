class HomeController {
  index(req, res) {
    res.send('Home');
  }
}

export default new HomeController();
