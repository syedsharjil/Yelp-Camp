var express=require("express");
var app=express();
var req=require("request");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home.ejs");
    
});
app.get("/campgrounds",function(req,res){
        var campground = [
            {name: "Downing's Lake", image:  "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg"},
            {name: "Goddison Park", image:  "https://farm4.staticflickr.com/3211/3062207412_03acc28b80.jpg"},
            {name: "White Hart", image:  "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
            {name: "Salmon Creek", image:  "https://pixabay.com/get/e834b70c2cf5083ed1584d05fb1d4e97e07ee3d21cac104490f2c379a6ecb5b0_340.jpg"},
            ];
       res.render("campgrounds",{campground:campground});
});
app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("now serving Yelpcamp");
});