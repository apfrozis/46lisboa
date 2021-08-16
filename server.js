function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const path = require('path');
const app = express();
app.use(requireHTTPS);

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'));
});
console.log("Port")
app.listen(8080, 'localhost', function(err) {
    if (err) {
        console.log(err)
    }
    console.log("listening on port:" + 8080)

});
  