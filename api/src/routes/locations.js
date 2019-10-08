import express from 'express';
import locations from '../models/locations';

const locationsRouter = express.Router();

locationsRouter.get('/locations', (req, res) => {
  const { query } = req;
  res.json(locations.find(query));
});

export default locationsRouter;
