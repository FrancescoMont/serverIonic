import  express  from 'express'
//import { v4 } from 'uuid';
const app = express();
const favourites : object[] = [];
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post('/favourite', (req,res) =>{
    const newFavourite ={
        ...req.body
    };
    favourites.push(newFavourite);
    res.emit('fav', true);
});