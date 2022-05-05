import express from 'express';
import 'express-async-error';

let tweets = [
  {
    id: '1',
    text: '팀코카인 화이팅',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png',
  },

  {
    id: '2',
    text: '팀코카인 화이팅',
    createdAt: Date.now().toString(),
    name: 'Woo',
    username: 'woo',
    url: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png',
  },
];

const router = express.Router();
// GET /tweets

// GET /tweets?username=:username

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: 'Tweet id(${id}) not found' });
  }
});

// POST /tweets

router.post('/', (req, res, next) => {
  const { text, name, username } = req.body; // Destructuring assignment
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: 'Tweet id(${id}) not found' });
  }
});

// DELETE /tweets/:id

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
