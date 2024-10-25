import express from 'express';

const server = express();

server.get('', (_, res) => {
  res.send('Olá R4NP3R, with pumped up kicks');
});
export { server };
