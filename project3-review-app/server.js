const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//const postRouter = require('./routes/posts');
const app = express();
const restaurantRouter = require('./routes/restaurant');
const userRouter = require('./routes/user');

const mongooseEnpoint = 'mongodb://127.0.0.1/restaurant_app';
mongoose.connect(mongooseEnpoint, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const cors = require('cors');
const auth_middleware = require('./routes/middleware/auth_middleware');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  console.log("received request");
  res.sendFile(path.join(__dirname, "build", "index.html"));});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: '*',
}));

app.use('/api/restaurant', restaurantRouter);
app.use('/api/user', userRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Starting server');
});