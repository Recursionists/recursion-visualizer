const express = require('express');
const funcController = require('../controllers/funcController');
const router = express.Router();

router.get('/', funcController.getFuncs, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.post('/add', funcController.addFunc, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.put('/update', funcController.updateFunc, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.delete('/delete', funcController.deleteFunc, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
