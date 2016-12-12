const chai = require("chai");
const expect = chai.expect;
chai.should();
let {fetchTweets} = require("../model/tweets");
let {fetchFacebookPosts} = require("../model/facebookPosts");
let tweets = require("../data/tweets.json");
let facebookPosts = require("../data/facebook_posts.json");
let handle = tweets[0].user.handle;

describe("Feetching tweets from users timeline", ()=>{

    describe("fetchTweets",()=>{
        it("should return an array of tweets",()=>{
            expect(fetchTweets(handle)).to.be.instanceof(Array)
        })
    })

    describe("fetchFacebookPosts",()=>{
        it("should return an array of Posts",()=>{
            expect(fetchFacebookPosts(handle)).to.be.instanceof(Array)
        })
    })

});