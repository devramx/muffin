var express = require('express');
var muffin = require('./routes/muffin');
var cors = require('cors');

var app = express();
app.use(cors());
var appRouter = express.Router();

entries = {
    '0': []
};


// appRouter.get('', function(req, res) { res.send({ msg: "Welcome to localhost:3001" }) });
appRouter.get('/', function(req, res) { res.send(entries.data); });
appRouter.get('/:id', muffin.getKV);
appRouter.get('/:id/:key', muffin.getVal);
appRouter.post('/:id/:key/:val', muffin.setVal);
appRouter.options('/', function(req, res) {
    res.send("Cors enabled !!!");
});
app.use('/muffin/v2', appRouter);
module.exports = app;
app.get('/', function(req, res) { res.send("Welcome to muffin demo !") });
app.listen(3001);
console.log('Listening on port 3001...');
