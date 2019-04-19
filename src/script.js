const express = require('express');
const script = express();
const producer = require('./producer')

script.route('/start').get(function (req,res) {
	producer(req.query.loop);
	res.status(200);
	res.setHeader('Content-Type', 'application/json');
   	 res.end(JSON.stringify({ send: true }));
});

module.exports = script;
