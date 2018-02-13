// require

// module.exports which points to a series of functions
// Display the Home Page
module.exports.home = (req, res) => {
 
    res.render('./index', {
      title: ' Login '
     });
  }

  module.exports.feedback = (req, res) => {
    res.render('./feedback', {
      title: 'Feed Back Form',
      email : req.body.userName
  
     });
  }


  module.exports.thankyou = (req, res) => {
    res.render('./thankyou', {
      title: 'Thank You !!!!'
     });
  }