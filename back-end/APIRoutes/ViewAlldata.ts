import { Request, Response } from 'express';
import axios from 'axios'
import PokeDexModel from '../Models/PokeDexModel';

export async function GetAllElements(req:Request,res:Response){
    const { num } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    //data model ---
    const nexturl = response.data.url 
    const abilityr = await axios.get(response.data.ability.url)
    const ability = abilityr.data.name
    



}