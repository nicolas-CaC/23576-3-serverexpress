import express from 'express';
import path from 'path';

const router = express.Router();
const root = path.resolve();

router.get('/', (_, res) => {
    res.sendFile(root + '/views/index.html')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json({ saludo: 'hola!' })
})

export default router;