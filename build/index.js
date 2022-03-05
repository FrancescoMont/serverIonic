"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { v4 } from 'uuid';
const app = (0, express_1.default)();
const favourites = [];
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
app.post('/favourites', (req, res) => {
    const newFavourites = Object.assign({}, req.body);
    const index = favourites.map(item => item.id);
    let newFavIndex = newFavourites.id;
    //console.log('newfav',newFavIndex);
    if (index == newFavIndex) {
        favourites.splice(favourites.indexOf(newFavourites), 1);
        res.status(200).json({ message: 'favourites deleted' });
    }
    else {
        favourites.push(newFavourites);
        res.status(201).json({ message: 'Added', newFavourites });
    }
    ;
    //console.log('index',index);
});
app.get('/', (req, res) => {
    res.status(200).json(favourites);
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log('app listen on port 5001');
});
