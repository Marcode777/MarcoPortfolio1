// var express = require('express');
// //var GitHubApi = require('node-github');
// var app = express(); // every time we say app.express, we're using express
// var PORT = process.env.PORT || 3000;// this is process.env.PORT, this is what heroku creates, meaning use their env. variable, which is their port, OR 3000
// // var github = new GitHubApi({version: "3.0.0"});

// // app.use("/css", express.static("public/css"));
// // app.use("/js", express.static("public/js"));

// app.get("/", function(req, res) {
//  res.sendFile(process.cwd() + "/home.html"); //this will route to my home page which is home.html, if you want to route to another page, just do this again, and everthing stays the same except for what's in yellow for 
// });

// // app.get("/github/:userName", function(req, res) {
// //   github.user.getFrom({user: req.params.userName}, function(err, gitInfo) {
// //     res.send(JSON.stringify(gitInfo));
// //   });
// // });

// app.listen(PORT, function() {
//  console.log("Listening on port %s" , PORT);
// });