const express = require('express');
const clicktrackingSchema = require('../schema/clicktrackingSchema');

const router = express.Router();

router.get('/click-tracking/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const trackingData = await clicktrackingSchema.findOne({ userId });
        
        if (!trackingData) {
            return res.status(201).json({ msg: 'User not found', sts: 1 });
        }
        
        res.status(200).json({
            data: trackingData,
            sts: 1
        });
    } catch (err) {
        res.status(500).json({ msg: 'Something went wrong', sts: 0 });
    }
});

router.post('/click-tracking', async (req, res) => {
    try {
        const { userId, monthlyStats, deviceCount, sitesCount, linkCount, shopCount, getConnectCount } = req.body;

        // Find if the tracking document already exists
        let trackingData = await ClickTracking.findOne({ userId });
        
        console.log("🚀 ~ router.post ~ trackingData:", trackingData)
        if (trackingData) {
            // Update existing data
            // if (monthlyStats) {
            //     trackingData.monthlyStats = monthlyStats;
            // }
            if(linkCount){
                trackingData.monthlyStats.linkCount = linkCount
            }
            if(shopCount){
                trackingData.monthlyStats.shopCount = shopCount
            }
            if(getConnectCount){
                trackingData.monthlyStats.getConnectCount = getConnectCount
            }
            if (deviceCount) {
                trackingData.deviceCount = deviceCount;
            }
            if (sitesCount) {
                trackingData.sitesCount = sitesCount;
            }
            await trackingData.save();
            return res.status(200).json({ msg: 'Click tracking updated', data: trackingData, sts: 1 });
        }

        // Create new tracking data if it doesn't exist
        trackingData = new ClickTracking({ 
            data: {
                userId, monthlyStats, deviceCount, sitesCount 
            },
            sts: 1
         });
        await trackingData.save();

        res.status(200).json({ msg: 'Click tracking created', data: trackingData, sts: 1 });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err , sts: 0});
    }
});

router.put('/click-tracking/:userId/device', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { deviceType } = req.body;

        const trackingData = await ClickTracking.findOne({ userId });
        
        if (!trackingData) {
            return res.status(404).json({ msg: 'User not found', sts: 1 });
        }

        // Update device counts
        switch (deviceType) {
            case 'linux':
                trackingData.deviceCount.linux += 1;
                break;
            case 'mac':
                trackingData.deviceCount.mac += 1;
                break;
            case 'ios':
                trackingData.deviceCount.ios += 1;
                break;
            case 'windows':
                trackingData.deviceCount.windows += 1;
                break;
            case 'android':
                trackingData.deviceCount.android += 1;
                break;
            default:
                trackingData.deviceCount.others += 1;
                break;
        }

        await trackingData.save();
        res.status(200).json({ msg: 'Device count updated', data: trackingData });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err });
    }
});

router.put('/click-tracking/:userId/sites', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { siteType } = req.body;  // Assuming you are passing a URL of the site

        const trackingData = await ClickTracking.findOne({ userId });

        if (!trackingData) {
            return res.status(404).json({ msg: 'User not found', sts: 1 });
        }

        switch (siteType) {
            case 'youtube':
                trackingData.sitesCount.youtube += 1;
                break;
            case 'facebook':
                trackingData.sitesCount.facebook += 1;
                break;
            case 'instagram':
                trackingData.sitesCount.instagram += 1;
                break;
            default:
                trackingData.sitesCount.others += 1;
                break;
        }

        await trackingData.save();
        res.status(200).json({ msg: 'Site count updated', data: trackingData, sts: 1 });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err });
    }
});

module.exports = router;