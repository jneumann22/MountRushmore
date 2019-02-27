const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = 1122;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true,
}));
// app.use(express.static(path.join(__dirname, '../real_client/dist')));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, (err) => {
  if (err) {
    console.log('error listening on port', port, err);
  } else {
    console.log('successfully listening on port,', port);
  }
});