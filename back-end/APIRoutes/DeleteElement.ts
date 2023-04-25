import { Request, Response } from 'express';
import PokeDexModel from '../Models/PokeDexModel';

export async function DeleteElement(req:Request,res:Response){
    const { id } = req.params;
    await PokeDexModel.findByIdAndRemove(id).then(() => {
        res.status(200).json({ message: 'Element deleted' });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    });
}


export async function DeleteElementNumber(req:Request,res:Response){
    const { number } = req.params;
    await PokeDexModel.findOneAndRemove({ number }).then(() => {
        res.status(200).json({ message: 'Element deleted' });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    });
}