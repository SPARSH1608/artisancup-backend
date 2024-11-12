import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

//app config
const app = express();
const PORT = 4000;

// middlewares
app.use(express.json());
app.use(cors());
//db connection
connectDB();

app.get('/', (req, res) => {
  res.send('API');
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
