
import { Request, Response } from 'express';
import PokeDexModel from '../Models/PokeDexModel';

export const AddToPokeDex = {
    path: '/api/addToPokeDex',
    method: 'post',
    handler: async (req: Request, res: Response) => {
    try {
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
    };