import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Main Router
app.use('/api', routes);

// Global Error Handler (Placeholder)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});

export default app;