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

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) tweet.text = text;
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  return tweets;
}
