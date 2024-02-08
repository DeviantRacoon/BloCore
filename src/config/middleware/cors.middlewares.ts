import { CorsOptions } from 'cors';

const allowedOrigins = ['http://localhost:8000'];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    callback(null, !origin || allowedOrigins.includes(origin));
  },
};

export default corsOptions;
