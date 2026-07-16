import { MongoClient, type MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable. Add it to .env');
}

const options: MongoClientOptions = {
  maxPoolSize: 10,
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const connectMongoClient = async (mongoClient: MongoClient) => {
  try {
    const client = await mongoClient.connect();
    await client.db().admin().ping();
    console.log('✅ MongoDB connection successful');
    return client;
  } catch (error) {
    console.error('🔴 MongoDB connection failed:', error);
    throw error;
  }
};

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = connectMongoClient(client);
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = connectMongoClient(client);
}

export async function getMongoClient() {
  return clientPromise;
}

export async function getMongoDb() {
  const client = await getMongoClient();
  return client.db();
}
