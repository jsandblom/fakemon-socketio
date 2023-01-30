const express = require('express')

const app = express()
// const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.send('<a href="deepinder.me/creating-a-real-time-chat-app-with-vue-socket-io-and-nodejs">');
});

const port = 3000
app.listen(port, () => {
  console.log(`listening http on port ${port}`);
});