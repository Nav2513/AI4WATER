const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const authRoute = require('./routes/authRoutes');




dbConnect();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is runing");
})

app.use('/api/auth', authRoute);




const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
    console.log(`Server is listening at the port ${PORT}`);
});

