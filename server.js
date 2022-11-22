const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;
console.log('passed port to use', port);
const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`))
