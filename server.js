const express = require('express');
const path = require('path');
const app = express();
//app.use(requireHTTPS);
const forceHttps = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
          console.log(req.url)
          console.log(req.get('Host'))
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
  // Instruct the app
  // to use the forceSSL
  // middleware
  app.use(forceHttps());
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'));
});
console.log("Port")
app.listen(8080, function(err) {
    if (err) {
        console.log(err)
    }
    console.log("listening on port:" + 8080)

});
  