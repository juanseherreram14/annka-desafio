import * as express from 'express';
import { GetPokeData } from './APIRoutes/getPokeData';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pokemon', GetPokeData);


app.listen(5000, () => {
  console.log('Server is running on port 3000')
})