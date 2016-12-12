const express = require("express");
const facebookRouter = express.Router();


facebookRouter.route('/')
    .get((req,res,next)=>{
        res.render('images',{title : "images"});
    })

module.exports = facebookRouter;