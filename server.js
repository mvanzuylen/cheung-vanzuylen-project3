const express = require('express');
const user = require('./src/CreateUser.jsx')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('/user', userRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log('Starting server');
  });