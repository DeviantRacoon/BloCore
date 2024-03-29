import { CorsOptions } from 'cors';

const allowedOrigins = ['*'];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    callback(null, !origin || allowedOrigins.includes(origin));
  },
  exposedHeaders: ['Authorization'], 
};

export default corsOptions;
