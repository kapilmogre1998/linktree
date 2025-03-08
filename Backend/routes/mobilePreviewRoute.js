const express = require('express');
const MobilePreview = require('../schema/mobilePreviewSchema');
const authenticateToken = require('../middleware/authenticateToken');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where you want to store the images
    },
    filename: (req, file, cb) => {
        // Set the file name as the current timestamp + original file name
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB file size limit
});

router.get('/mobilepreview/get', authenticateToken, async (req, res) => {
    try {
        if (!req.query.userId) {
            return res.status(400).json({ msg: 'UserId is required', sts: 0 });
        }

        const data = await MobilePreview.findOne({ userId: req.query.userId });

        if (!data) {
            return res.status(200).json({ msg: 'Data not found', sts: 1 });
        }

        res.status(201).json({
            data: data,
            sts: 1
        });
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(400).json({ msg: 'Error creating data', sts: 0 });
    }
});

router.get('/share-profle', async (req, res) => {
    try {
        if (!req.query.userId) {
            return res.status(400).json({ msg: 'UserId is required', sts: 0 });
        }

        const data = await MobilePreview.findOne({ userId: req.query.userId });

        if (!data) {
            return res.status(200).json({ msg: 'Data not found', sts: 1 });
        }

        res.status(201).json({
            data: data,
            sts: 1
        });
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(400).json({ msg: 'Error creating data', sts: 0 });
    }
});

router.post('/mobilepreview/create', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const newData = new MobilePreview(req.body);

        const savedData = await newData.save();

        res.status(200).json({
            data: savedData,
            sts: 1
        });
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(400).json({ msg: 'Error creating data', sts: 0 });
    }
});

router.post('/mobilepreview/update/:id', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const parsedData = JSON.parse(req.body.data);
        const updatedData = await MobilePreview.findByIdAndUpdate(
            req.params.id,
            { $set: parsedData }, 
            { new: true, runValidators: true }
        );
        if (!updatedData) {
            return res.status(200).json({ msg: 'Data not found', sts: 0 });
        }

        res.status(200).json({
            data: updatedData,
            sts: 1
        });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(400).json({ msg: 'Error updating data', sts: 0 });
    }
});

module.exports = router;
