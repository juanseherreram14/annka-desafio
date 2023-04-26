import { Request, Response } from 'express';
import PokeDexModel from '../Models/PokeDexModel';



export async function AddToPokeDex(req: Request, res: Response) {
  try {
    console.log(req.body); // Add this line to check the body of the request
    const newPokemon = new PokeDexModel({
      name: req.body.name,
      url: req.body.url,
    });
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
                                        