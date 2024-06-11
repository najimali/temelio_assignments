import { Request, Response } from 'express';
import dataStore from '../dataStore';
import { Nonprofit } from '../models/Nonprofit';

export const getAllNonprofits = (req: Request, res: Response) => {
  res.json(dataStore.nonprofits);
};

export const createNonprofit = (req: Request, res: Response) => {
  const { email, name, address } = req.body;
  const existingNonProfit = dataStore.nonprofits.filter((nonprofit) => nonprofit.email !== email);
  const newNonprofit: Nonprofit = { email, name, address };
  dataStore.nonprofits = [...existingNonProfit,newNonprofit];
  res.status(201).json(newNonprofit);
};