import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;
console.log('MongoDB URI found:', MONGODB_URI.substring(0, 20) + '...'); // Only log part of the URI for security

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  console.log('Attempting to connect to MongoDB...');
  
  if (cached.conn) {
    console.log('Using cached connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
    };

    console.log('Creating new connection...');
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully');
        return mongoose;
      })
      .catch((error) => {
        console.error('MongoDB connection error details:', {
          name: error.name,
          message: error.message,
          code: error.code,
          codeName: error.codeName
        });
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.error('MongoDB connection error:', e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;