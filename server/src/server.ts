import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/weburl';

const app = express();
const port = 8081;
const DB_URL = process.env.URL || 'localhost:27017'

mongoose.connect(`mongodb://${DB_URL}/shortify`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, `DB connection error: ${DB_URL}`));
db.once('open', () => {
    console.log('MongoDB connected!!!')
})

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;