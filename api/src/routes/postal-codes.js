import express from 'express';
import postalCodes from '../models/postal-codes';

const postalCodesRouter = express.Router();

postalCodesRouter.get('/postal-codes', (req, res) => {
  const { query } = req;
  res.json(postalCodes.find(query));
});

export default postalCodesRouter;
