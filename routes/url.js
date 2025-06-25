require('dotenv').config();
const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const nanoid = async () => (await import('nanoid')).nanoid;

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'originalUrl is required' });
  }

  try {
    const generateNanoid = await nanoid();
    const shortCode = generateNanoid(6);
    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    const newUrl = new Url({ originalUrl, shortCode });
    await newUrl.save();

    res.status(201).json({ originalUrl, shortUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET /:shortCode - Redirect
router.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;

  try {
    const url = await Url.findOne({ shortCode });

    if (url) {
      url.visitCount += 1;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /stats/:shortCode - Stats endpoint
router.get('/stats/:shortCode', async (req, res) => {
  const { shortCode } = req.params;

  try {
    const url = await Url.findOne({ shortCode });

    if (url) {
      res.json({
        originalUrl: url.originalUrl,
        visitCount: url.visitCount
      });
    } else {
      res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
