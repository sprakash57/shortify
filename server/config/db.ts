import mongoose from 'mongoose';
import config from 'config';

const uri: string = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log('DB connection error: ', err))
}

export default connectDB;
