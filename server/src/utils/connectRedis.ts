import { createClient } from 'redis';

const redisUrl = 'redis://localhost:6379';
const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis connected...');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      setTimeout(connectRedis, 5000);
    }
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;