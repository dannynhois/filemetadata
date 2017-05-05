var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer({ dest: 'uploads/' })

app.get("/", function(req,res){
    res.sendfile("index.html");
});

app.post("/upload", upload.single('avatar'), function(req,res,next){
    var ans = { "size": req.file.size};
    res.send(ans);
})

app.listen(8080, function(){
    console.log("Listening on port 8080...");
});