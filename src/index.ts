import express from 'express';

import { getMessage } from './routes';

const app = express();

app.get('/', getMessage);

app.listen(3333, () => {
  console.log('Go! Go! Go! 🚀');
});