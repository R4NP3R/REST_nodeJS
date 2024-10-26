import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('', (_, res) => {
  res.send('Olá R4NP3R, with pumped up kicks');
});

router.post('/enviar', (req, res) => {
  res.status(StatusCodes.FORBIDDEN).json(req.body);
});

export { router };
