import express from 'express';
import cors from 'cors';
import connectDB from '../config/db';
import router from './routes/weburl';

const app = express();
const port = 8081;

connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

app.listen(port, () => console.log(`Server is running on port ${port}`));