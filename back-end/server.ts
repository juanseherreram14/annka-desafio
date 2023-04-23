import express, { Request, Response } from 'express';
import { GetPokeData } from './APIRoutes/getPokeData';
import { AddToPokeDex } from './APIRoutes/SavePokeData';
import { GetAllPokemonData } from './APIRoutes/GetPokedex';
import { DeleteElement } from './APIRoutes/DeleteElement';
import { UpdateElement } from './APIRoutes/UpdateElement';

import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.get('/', (req: Request, res: Response) => {
res.send('Hello World!');
});

const DBurl = "mongodb://127.0.0.1:27017/pokedata";

const DBconn = async (): Promise<void> => {
await mongoose.connect(DBurl).then(() => {
console.log("connected to MongoDB");
}).catch(error => {
console.error(error);
});

console.log("connected");
};

DBconn();

app.use(express.json());
app.use(cors());
app.get('/pokemon', GetPokeData);
app.post('/api/add', AddToPokeDex);
app.get('/api/get', GetAllPokemonData);
app.delete('/api/delete/:id', DeleteElement);
app.put('/api/update/:id', UpdateElement);



//npx ts-node-dev server.ts
app.listen(4000, () => {
console.log('Server is running on port 3000');
});

// Note