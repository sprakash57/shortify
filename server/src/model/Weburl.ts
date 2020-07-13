import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WeburlSchema = new Schema({
    inputUrl: {
        type: String,
        required: true
    },
    shortUrl: String
}, { timestamps: true });

const Weburl = mongoose.model('Weburl', WeburlSchema);

export default Weburl;