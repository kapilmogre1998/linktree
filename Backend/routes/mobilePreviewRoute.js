const express = require('express');
const MobilePreview = require('../schema/mobilePreviewSchema');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/mobilepreview/get', authenticateToken, async (req, res) => {
    try {
        if(!req.query.userId){
            return res.status(400).json({ msg: 'UserId is required', sts: 0 });
        }

        const data = await MobilePreview.findOne({userId: req.query.userId});

        if(!data){
            return res.status(404).json({ msg: 'Data not found', sts: 1 });
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
        if(!req.query.userId){
            return res.status(400).json({ msg: 'UserId is required', sts: 0 });
        }

        const data = await MobilePreview.findOne({userId: req.query.userId});

        if(!data){
            return res.status(404).json({ msg: 'Data not found', sts: 1 });
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

router.post('/mobilepreview/create', authenticateToken, async (req, res) => {
    try {
        const newData = new MobilePreview(req.body);
        
        const savedData = await newData.save();
        
        res.status(201).json({
            data: savedData,
            sts: 1
        });
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(400).json({ msg: 'Error creating data', sts: 0 });
    }
});

router.put('/mobilepreview/update/:id', authenticateToken , async (req, res) => {
    try {
        const updatedData = await MobilePreview.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        
        if (!updatedData) {
            return res.status(404).json({ msg: 'Data not found', sts: 0 });
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
