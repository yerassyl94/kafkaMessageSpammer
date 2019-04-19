const express = require('express')
const app = express();
const port = 8520;

const script = require('./src/script')

app.use(script);

app.listen(port,function () {
	console.log('Server running on port:', port)
})
