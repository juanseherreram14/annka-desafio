import { Request, Response } from 'express';
import PokeDexModel from '../Models/PokeDexModel';


export async function UpdateElement(req: Request, res: Response) {
    try{
        const { id } = req.params;
        const { name, url } = req.body;
        const updatedElement = await PokeDexModel.findByIdAndUpdate(id, { name, url }, { new: true });
        res.status(200).json(updatedElement);
        

    }catch(err){
        console.error(err)
    }
}

export async function UpdateElementByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const { newName, newUrl } = req.body;
      const updatedElement = await PokeDexModel.findOneAndUpdate({ name }, { name: newName, url: newUrl }, { new: true });
      res.status(200).json(updatedElement);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }