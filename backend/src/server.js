const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');


dbConnect();
const app = express();
app.use(express.json());




const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
    console.log(`Server is listening at the port ${PORT}`);
});

