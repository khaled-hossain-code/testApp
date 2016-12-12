const {fetchTweets} = require("../model/tweets");
let {fetchFacebookPosts} = require("../model/facebookPosts");
const _ = require("lodash");

function fetchMessages(handle){

    let tweetMessage = fetchTweets(handle);
    let facebookMessage = fetchFacebookPosts(handle);

    let messages = _.concat(tweetMessage,facebookMessage);

    return messages;
}

module.exports = {fetchMessages};