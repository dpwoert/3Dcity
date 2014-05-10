IO.scrapers.loop = [];

var loop = function(){

    //execute all scrapers
    var Fiber = Npm.require('fibers');
    Fiber(function(){
        for( var i = 0 ; i < IO.scrapers.loop.length ; i++){
            IO.scrapers.loop[i]();
        }
    }).run();

    setTimeout(loop, 1000*60 + 1);
}

//auto start
Meteor.startup(loop);
