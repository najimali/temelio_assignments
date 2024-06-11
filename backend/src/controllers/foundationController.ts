import { Request, Response } from 'express';
import dataStore from '../dataStore';
import { Foundation } from '../models/Foundation';

export const getAllFoundations = (req: Request, res: Response) => {
  res.json(dataStore.foundations);
};

export const createFoundation = (req: Request, res: Response) => {
  
  const { email } = req.body;
  const newFoundation: Foundation = { email };
  const filterExisting = dataStore.foundations.filter((foundation) => foundation.email !== email);
  dataStore.foundations = [...filterExisting,newFoundation]
  res.status(201).json(newFoundation);
};