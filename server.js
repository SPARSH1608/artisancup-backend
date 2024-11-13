import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import 'dotenv/config';
//app config
const app = express();
app.use(cors());
const PORT = 4000;
const allowMethods = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'];
const allowHeaders = [
  'Content-Type',
  'Authorization',
  'X-Content-Type-Options',
  'Accept',
  'X-Requested-With',
  'Origin',
  'Access-Control-Request-Method',
  'Access-Control-Request-Headers',
];

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders:
      'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers',
  })
);

// middlewares
app.use(express.json());
//db connection
connectDB();

//api end points
app.use('/images', express.static('uploads'));
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.get('/', (req, res) => {
  res.send('API');
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
