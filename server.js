const express = require('express');
const path = require('path');
const app = express();
//app.use(requireHTTPS);

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'));
});
console.log("Port")
app.listen((process.env.PORT || 8080), function(err) {
    if (err) {
        console.log(err)
    }
    console.log("listening on port:" + 8080)

});
  