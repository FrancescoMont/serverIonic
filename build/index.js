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
    const index = favourites.findIndex(item => item.id);
    if (favourites.includes(newFavourites)) {
        favourites.splice(favourites.indexOf(newFavourites), 1);
        res.status(200).json({ message: 'favourites deleted' });
    }
    else {
        favourites.push(newFavourites);
        res.status(201).json({ message: 'Added', newFavourites });
    }
    ;
});
app.get('/favourites', (req, res) => {
    res.status(200).json(favourites);
});
app.listen(5001);
