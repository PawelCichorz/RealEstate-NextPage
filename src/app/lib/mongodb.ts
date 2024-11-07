import mongoose from 'mongoose';

import { config } from '../config';

let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(config.dataBase, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    } as never);
    isConnected = true;
    console.log('Połączono z bazą danych');
  } catch (err) {
    console.error('Błąd podczas łączenia z bazą danych:', err);
  }
};

export default connectToDatabase;
