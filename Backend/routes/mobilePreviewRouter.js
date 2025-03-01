const express = require('express');
const MobilePreview = require('../schema/mobilePreviewSchema');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Create a new data document (POST)
router.post('/mobilepreview/create', authenticateToken, async (req, res) => {
    try {
        // Create a new document with the data from the request body
        const newData = new MobilePreview(req.body);
        
        // Save the document to the database
        const savedData = await newData.save();
        
        res.status(201).json(savedData); // Respond with the created document
    } catch (error) {
        console.error('Error creating data:', error);
        res.status(400).json({ message: 'Error creating data', error: error.message });
    }
});

// Update an exmobilepreview/createisting data document (PUT)
router.put('/mobilepreview/update/:id', authenticateToken , async (req, res) => {
    try {
        // Find the document by its ID and update it with the request body
        const updatedData = await MobilePreview.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        
        res.status(200).json(updatedData); // Respond with the updated document
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(400).json({ message: 'Error updating data', error: error.message });
    }
});

module.exports = router;
