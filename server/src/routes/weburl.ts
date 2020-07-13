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
    const { inputUrl } = req.body;
    if (inputUrl === '') return res.status(400).json({ error: "Url is mandatory" });
    try {

    } catch (error) {

    }
})

export default router;