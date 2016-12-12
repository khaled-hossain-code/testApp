const express = require("express");
const messagesRouter = express.Router();
const {fetchMessages} = require('../controller/messages.controller');

messagesRouter.route('/')
    .get((req,res,next)=>{
        res.render('messages',{title:"messages"});
    })
    .post((req,res,next)=>{
        req.check('handle','handle can not be empty').notEmpty();
        var errors = req.validationErrors();

        if(errors){
            res.send(400);
        }

        let handle = req.body.handle;
        console.log(handle);
        let messages = fetchMessages(handle);
        res.render('showMessages',{messages});        
    });

messagesRouter.route('/showMessages')
    .get((req,res,next)=>{
        res.render('showMessages',{});
    });


module.exports = messagesRouter;
