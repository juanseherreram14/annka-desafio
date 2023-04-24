import { Request, Response } from 'express';
import PokeDexModel from '../Models/PokeDexModel';

export async function GetAllPokemonData(req: Request, res: Response) {
    try {
      const pokemonData = await PokeDexModel.find();
      res.status(200).json(pokemonData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }