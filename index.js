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
    }

    users = [...users, user];
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    res.send(tweets);
});

server.post("/tweets", (req, res) => {
    const dataTweet = req.body;

    const userAvatar = users.find(people => {
        return (dataTweet.username);
    });

    const tweet = {...dataTweet, avatar: userAvatar.avatar};

    tweets = [...tweets, tweet];
    res.send("OK");
});

server.listen(5000);
