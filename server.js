const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser'),
      cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Routes = require('./api/routes/routes');

app.use(Routes);

app.listen(port);

console.log('short-link server started on: ' + port);