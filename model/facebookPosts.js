var facebookPosts = require("../data/facebook_posts.json");
const _ = require("lodash");

function fetchFacebookPosts(handle){
    let userPosts = _.filter(facebookPosts,(facebookPost)=>{
        return facebookPost.user.handle == handle;
    });

    let postMessages = [];

    for (let eachPost of userPosts) {
        postMessages.push(eachPost.content.elements.title);
    }

    return postMessages;
}

function fetchFacebookImages(){

}


module.exports = {fetchFacebookPosts, fetchFacebookImages};