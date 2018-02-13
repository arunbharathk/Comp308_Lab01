let express = require('express');
let router = express.Router();

// need a require statement
// require the index controller
let indexController = require('../controllers/index');

router.get('/', (req, res) => {
  indexController.home(req, res);
  
});


router.post('/feedback', (req, res) => {
  indexController.feedback(req, res);
  
});

router.post('/thankyou', (req, res) => {
  indexController.thankyou(req, res);
});


/* GET home page.
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
 */
module.exports = router;
