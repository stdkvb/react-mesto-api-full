require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;

const router = require('./routes');
const serverError = require('./middlewares/serverError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  origin: [
    'http://tutvamne.mesto.nomoredomains.icu',
    'https://tutvamne.mesto.nomoredomains.icu',
    'http://localhost:3000',
    'https://localhost:3000',
  ],
  allowedHeaders: ['Content-Type', 'origin'],
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  preflightContinue: false,
  credentials: true,
};

app.use(cors(options));
app.use(cookieParser());
app.use(requestLogger);

app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(serverError);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
