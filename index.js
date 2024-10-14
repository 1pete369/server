const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userRouter = require("./routes/users");
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('open', () => {
    console.log("Connected to Mongodb -> empirev1");
});

// Remove app.listen (Vercel handles this)
// app.listen(process.env.PORT_NUMBER, () => {
//     console.log(`server started on ${process.env.PORT_NUMBER}`);
// });

// app.use('/users', userRouter);

app.get('/',(req,res)=>{
    res.send({message : "Testing"})
})

// Export the app for Vercel to handle as a serverless function
module.exports = app;
