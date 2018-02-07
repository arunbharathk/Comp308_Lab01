// require

// module.exports which points to a series of functions
// Display the Home Page
module.exports.home = (req, res) => {
    res.render('./index', {
      title: 'Express Controller'
     });
  }