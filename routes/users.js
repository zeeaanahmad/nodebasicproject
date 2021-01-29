var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool',function(req,res,next){
  const { Sequelize } = require('sequelize');
  var Author = require('../models/myauthor');

  const sequelize = new Sequelize('locallibrary', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.send('You\'re cool!' );
});
module.exports = router;
