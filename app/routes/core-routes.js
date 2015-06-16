var React = require('react'),
ReactApp = React.createFactory(require('../components/ReactApp'));
 
var routes = function(app) {
 
  app.get('/', function(req, res){
 
 	var data = {hello:"Hello World!"};// Do DB query or whatever here
 
    // React.renderToString with data from DB call
    var reactHtml = React.renderToString(ReactApp({data: data}));
 
    // Output html and data from DB call to rehydrate app
    res.render('index.ejs', {reactOutput: reactHtml, dataJson: data});
  });
 
};

module.exports = routes;