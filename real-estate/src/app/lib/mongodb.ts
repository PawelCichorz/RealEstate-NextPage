import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = "mongodb+srv://pawelcichorz74:1kfSK66z6KuXuEWc@cluster0.knqbbwq.mongodb.net/next"

const connectToDatabase = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    }as any) ;
    console.log(process.env.MONGODB_URL);
    console.log('Połączono z bazą danych');
  } catch (err) {
    console.log(process.env.MONGODB_URL);
    console.error('Błąd podczas łączenia z bazą danych:', err);
  }
};

export default connectToDatabase;