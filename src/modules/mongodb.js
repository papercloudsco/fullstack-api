///

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// pulls in and sets our environment variables from a .env file
dotenv.config();

// connect mongoose
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

//
export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongo connected');
});

export default mongoose;
