import  express  from 'express'
//import { v4 } from 'uuid';
const app = express();
const favourites : RootObject[] = [];
app.use(express.urlencoded({
    extended: true
}));

export interface RootObject {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export interface DetailGame {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    short_description: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    release_date: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    freetogame_profile_url: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    minimum_system_requirements: MinimumSystemRequirements | null;
    screenshots: Screenshot[];
  }

  export interface MinimumSystemRequirements {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  }
  
  export interface Screenshot {
    id: number;
    image: string;
  }
app.use(express.json());

app.post('/favourites', (req,res) =>{
    const newFavourites ={
        ...req.body
    };
    const index = favourites.map(item => item.id);
    
    let newFavIndex = newFavourites.id;
    console.log('newfav',newFavIndex);
    if (index == newFavIndex){
            favourites.splice(favourites.indexOf(newFavourites),1);
            res.status(200).json({message:'favourites deleted'})
    } else {
        favourites.push(newFavourites);
    res.status(201).json({message : 'Added', newFavourites});
    };
    console.log('index',index);
});

app.get('/favourites', (req, res) => {
        res.status(200).json(favourites);
    });
app.listen(5001);