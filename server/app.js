import express from 'express';
import 'express-async-error'; // 프라미스, async 에러 찾기
import cors from 'cors';
import morgan from 'morgan'; // for debugging
import helmet from 'helmet'; // 보안
import tweetsRouter from './router/tweets.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
