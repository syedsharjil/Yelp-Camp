var express=require("express");
var app=express();
var req=require("request");
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
var campground = [
            {name: "Downing's Lake", image:  "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg"},
            {name: "Goddison Park", image:  "https://farm4.staticflickr.com/3211/3062207412_03acc28b80.jpg"},
            {name: "White Hart", image:  "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
            {name: "Salmon Creek", image:  "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
            ];
app.get("/",function(req,res){
    res.render("home.ejs");
    
});
app.get("/campgrounds",function(req,res){
        res.render("campgrounds",{campground:campground});
});
app.post("/campgrounds",function(req,res){
    var name = req.body.Name;
    var image = req.body.Image;
    var newcg = {name:name, image:image};
    campground.push(newcg);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
    res.render("forms.ejs");
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("now serving Yelpcamp");
});