//https://nodejs02webapp-chrisjtollefson.c9users.io/

var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbroutes');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {
        nav: [{Link : 'events', Text : 'events'},
              {Link : '#services', Text : 'services'}, 
              {Link : '#portfolio', Text : 'portfolio'}, 
              {Link : '#about', Text : 'about'}, 
              {Link : '#team', Text : 'team'}, 
              {Link : '#contact', Text : 'contact'}
             ]
    });
});

app.use('/events', eventRouter);
app.use('/Db', dbRouter);

app.listen(port, function(err){
   console.log('The server is running on port: ' + port); 
});