const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes')
const cors = require('cors');


dbConnect();
const app = express();
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
  }));


app.get('/', (req, res) => {
    res.send("Server is runing");
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);




const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
    console.log(`Server is listening at the port ${PORT}`);
});

