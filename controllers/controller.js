//Pull all requirements
var express = require('express');
//var db = require("../models");
var router = express.Router();
var path = require('path');


//Web page entry
router.get('/', function(req,res){
    res.sendFile('../home.html');
});

//Serves the home page
module.exports = router;
