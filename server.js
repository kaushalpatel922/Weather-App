var express = require('express');

//Create our app
var app = express();
// figures out the port or use 3000
const PORT = process.env.PORT || 3000;

// if sent to https - redirect to http
app.use(function(req, res, next) {
  if (req.header['x-forwarded-proto'] === 'http') {
    next();
  } else {
    response.redirect('http://' + req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("express server is up on port port: " + PORT);
});
