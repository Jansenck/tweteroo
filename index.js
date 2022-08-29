import express, {json} from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

let users = [];
let tweets = [];

server.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;

    const user = {
        username,
        avatar
    };

    users = [...users, user];
    res.send("OK");

});

server.get("/tweets", (req, res) => {
    
    let lastTweets = [];

    if(tweets.length <= 10){
        for(let i = 0; i < tweets.length; i++){
            lastTweets.push(tweets[i]);
        }
    } else if(tweets.length > 10){
        for(let i = 0; i < 10; i++){
            lastTweets.push(tweets[i]);
        }
    }
    
    res.send(lastTweets);
});

server.post("/tweets", (req, res) => {
    const dataTweet = req.body;

    const userAvatar = users.find(people => {
        return (dataTweet.username);
    });

    const tweet = {...dataTweet, avatar: userAvatar.avatar};

    tweets = [tweet, ...tweets];

    res.send("OK");
});

server.listen(5000);
