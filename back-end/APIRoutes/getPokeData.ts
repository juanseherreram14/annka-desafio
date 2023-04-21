import axios from 'axios';
import { Request, Response } from 'express';

export async function GetPokeData(req: Request, res: Response) {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching Pokemon data');
  }
}