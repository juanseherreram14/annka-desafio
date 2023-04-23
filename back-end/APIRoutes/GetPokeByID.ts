import { Request, Response } from 'express';
import PokeDexModel from '../Models/PokeDexModel';

export async function GetElementById(req: Request, res: Response) {
    try{
        const { id } = req.params;
        const element = await PokeDexModel.findById(id);
        res.status(200).json(element);
    }catch(err){
        console.error(err)
    }
}


export async function FindByName(req: Request, res: Response){
    try {
        const { name } = req.params;
        const pokemon = await PokeDexModel.findOne({ name });
        if (!pokemon) {
          return res.status(404).json({ error: 'Pokemon not found' });
        }
        res.json(pokemon);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
}


