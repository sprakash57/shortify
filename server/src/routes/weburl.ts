import express from 'express';
import Weburl from '../model/Weburl';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const urls = await Weburl.find().sort({ createdAt: -1 });
        res.json(urls);
    } catch (error) {
        if (error.kind === 'ObjectId') return res.status(400).json({ error: 'Content not found' });
        return res.status(500).json({ error: error.message });
    }
});


router.post('/create', async (req, res) => {
    console.log('**** create', req.body);
    const { inputUrl } = req.body;
    if (inputUrl === '') return res.status(400).json({ error: "Url is missing" });
    try {
        const url = await Weburl.findOne({ inputUrl });
        if (url) return res.json(url);
        const newUrl = new Weburl({ inputUrl, shortUrl: 'ji4lijif' });
        await newUrl.save();
        return res.json(newUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;