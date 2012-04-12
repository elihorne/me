
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
  
  var less = require('less');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/nopromo', function(req, res){
	res.render('nopromo.jade', {
		title : 'No Promo'
	});
});
app.get('/work*', function(req, res){
  res.render('work.jade', {
    title : 'Work | Eli Horne'
  });
});

app.listen(3000);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);