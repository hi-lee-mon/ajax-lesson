const express = require('express');
const dotenv = require('dotenv');
const practiceOneRouter = require('./routes/practiceOne');
const practiceTwoRouter = require('./routes/practiceTwo');
const practiceTwoPlusRouter = require('./routes/practiceTwoPlus');
const lessonOneRouter = require('./routes/lessonOne');
const lessonTwoRouter = require('./routes/lessonTwo');
const lessonThreeRouter = require('./routes/lessonThree');
const topPage = require('./pages/top');
const cors = require('cors');
const app = express();
dotenv.config();

app.use(express.static('public'));

app.use(cors());

const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
  })
  .on('error', (error) => {
    // エラーの処理
    throw new Error(error.message);
  });

app.get('/', (request, response) => {
  response.status(200).send(topPage);
});

// ルーティング
app.use('/practiceOne', practiceOneRouter);
app.use('/practiceTwo', practiceTwoRouter);
app.use('/practiceTwoPlus', practiceTwoPlusRouter);
app.use('/lessonOne', lessonOneRouter);
app.use('/lessonTwo', lessonTwoRouter);
app.use('/lessonThree', lessonThreeRouter);
