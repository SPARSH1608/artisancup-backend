import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://sparshgoel:dbSparshCup@cluster0.i5qcg.mongodb.net/artisanCup?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log('Db connected'));
};
