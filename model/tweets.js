let tweets = require("../data/tweets.json");
const _ = require("lodash");


function fetchTweets(handle){
    let userTweets = _.filter(tweets,(tweet)=>{
        return tweet.user.handle == handle;
    });

    let tweetMessages = [];

    for (let eachTweet of userTweets) {
        tweetMessages.push(eachTweet.tweet);
    }
    //console.log(tweetMessages);
    return tweetMessages;
}

function fetchTweetImages(){

}

module.exports = {fetchTweets, fetchTweetImages}