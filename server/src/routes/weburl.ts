import express from 'express';
import Weburl from '../model/Weburl';
import uniqueUrl from '../libs/urlGenerator';

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
    const { inputUrl } = req.body;
    if (inputUrl === '') return res.status(400).json({ error: "Url is missing" });
    try {
        let url = await Weburl.findOne({ inputUrl });
        if (url) return res.json(url);
        url = new Weburl({ inputUrl, shortUrl: uniqueUrl() });
        await url.save();
        return res.json(url);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    if (id === '') return res.status(400).json({ error: "Id is missing" });
    try {
        let response = await Weburl.findByIdAndDelete(id);
        return res.json({ message: "Url deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete('/deleteAll', async (req, res) => {
    try {
        let response = await Weburl.deleteMany({});
        return res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;