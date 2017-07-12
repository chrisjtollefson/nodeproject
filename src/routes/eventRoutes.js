var express = require("express");
var eventRouter = express.Router();
var mongodb = require("mongodb").MongoClient;

eventRouter.route('/').get(function(req, res){
    //open connection to DB
    var url = 'mongodb://localhost:27017/eventsApp';
    mongodb.connect(url, function(err, db){
        var collection = db.collection('events');
        //address collection for data
        collection.find({}).toArray(function(err, results){
            res.render('events', {
                nav: [{Link : '/', Text : 'back'},
                      //{Link : '#services', Text : 'services'}, 
                      //{Link : '#portfolio', Text : 'portfolio'}, 
                      {Link : '#ourevents', Text : 'Our Events'}, 
                      //{Link : '#team', Text : 'team'}, 
                      {Link : '#contact', Text : 'contact'}
                ],
                //renders results on html
                events: results
            });
        });
    });
});

eventRouter.route('/:id').get(function(req, res){
    var id = req.params.id;
    var url = 'mongodb://localhost:27017/eventsApp';
    mongodb.connect(url, function(err, db){
        var collection = db.collection('events');
        collection.find({}).toArray(function(err, results){
            res.render('event', {
                nav: [{Link : '/events', Text : 'back'},
                    //{Link : '#services', Text : 'services'}, 
                    //{Link : '#portfolio', Text : 'portfolio'}, 
                    {Link : '#ourevents', Text : 'Our Events'}, 
                    //{Link : '#team', Text : 'team'}, 
                    {Link : '#contact', Text : 'contact'}
                ],
                events: results[id]
            });
        });
    });
});

module.exports = eventRouter;