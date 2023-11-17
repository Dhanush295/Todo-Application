const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const userRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/users",userRouter);

mongoose
    .connect('mongodb Url', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'todo'
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });


app.listen(3000,()=> console.log("Server Listening on port 3000"));
