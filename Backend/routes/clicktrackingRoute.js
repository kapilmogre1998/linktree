const express = require('express');
const clicktrackingSchema = require('../schema/clicktrackingSchema');
const os = require('os');

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
        const { userId, monthlyStats = {}, deviceCount = [], sitesCount = [], linkCount = 0, shopCount = 0, getConnectCount = 0 } = req.body;
        const platform = os.platform();

        // Find if the tracking document already exists
        let trackingData = await clicktrackingSchema.findOne({ userId });

        if (trackingData) {
            // Update existing data
            // Update the monthlyStats
            // if (monthlyStats.month) {
            //     trackingData.monthlyStats.month = monthlyStats.month;
            // }

            // Increment the counts if values are present
            if (linkCount) {
                trackingData.monthlyStats.linkCount = (parseInt(trackingData.monthlyStats.linkCount) || 0) + 1;
            }
            if (shopCount) {
                trackingData.monthlyStats.shopCount = (parseInt(trackingData.monthlyStats.shopCount) || 0) + 1;
            }
            if (getConnectCount) {
                trackingData.monthlyStats.getConnectCount = (parseInt(trackingData.monthlyStats.getConnectCount) || 0) + 1;
            }

            if (platform) {
                console.log(platform == "Linux", typeof platform, typeof trackingData.deviceCount.linux)
                if(platform == 'linux'){
                    trackingData.deviceCount['linux'] = parseInt(trackingData.deviceCount['linux']) + 1;
                    console.log(parseInt(trackingData.deviceCount['linux']), trackingData.deviceCount)
                }
                if(platform == 'mac'){
                    trackingData.deviceCount['mac'] = parseInt(trackingData.deviceCount['mac']) + 1;
                }
                if(platform == 'ios'){
                    trackingData.deviceCount['ios'] = parseInt(trackingData.deviceCount['ios']) + 1;
                }
                if(platform == 'windows'){
                    trackingData.deviceCount['windows'] = parseInt(trackingData.deviceCount['windows']) + 1;
                }
                if(platform == 'android'){
                    trackingData.deviceCount['android'] = parseInt(trackingData.deviceCount['android']) + 1;
                }
                if(platform == 'others'){
                    trackingData.deviceCount['others'] = parseInt(trackingData.deviceCount['others']) + 1;
                }
            }

            // Increment device counts based on the provided device types
            // deviceCount.forEach(device => {
            //     if (trackingData.deviceCount[device] !== undefined) {
            //         trackingData.deviceCount[device] = (parseInt(trackingData.deviceCount[device]) || 0) + 1;
            //     } else {
            //         trackingData.deviceCount.others = (parseInt(trackingData.deviceCount.others) || 0) + 1;
            //     }
            // });

            // Increment site counts based on the provided site names
            if (sitesCount) {
                sitesCount.forEach(site => {
                    if (trackingData.sitesCount[site] !== undefined) {
                        trackingData.sitesCount[site] = (parseInt(trackingData.sitesCount[site]) || 0) + 1;
                    } else {
                        trackingData.sitesCount.others = (parseInt(trackingData.sitesCount.others) || 0) + 1;
                    }
                });
            }

            // Save the updated tracking data
            await trackingData.save();
            return res.status(200).json({ msg: 'Click tracking updated', data: trackingData, sts: 1 });
        }

        // Create new tracking data if it doesn't exist
        trackingData = new clicktrackingSchema({
            userId,
            monthlyStats: {
                // month: monthlyStats.month || '2025-03', // Default to current month if not provided
                linkCount: linkCount,
                shopCount: shopCount,
                getConnectCount: getConnectCount
            },
            deviceCount: {
                linux: platform == 'linux' ? 1 : 0,
                mac: platform == 'mac' ? 1 : 0,
                ios: platform == 'ios' ? 1 : 0,
                windows: platform == 'windows' ? 1 : 0,
                android: platform == 'android' ? 1 : 0,
                others: 0
            },
            sitesCount: {
                youtube: sitesCount?.youtube || 0,
                facebook: sitesCount?.facebook || 0,
                instagram: sitesCount?.instagram || 0,
                others: ['twitter', 'amazon', 'flipkart'].includes(sitesCount) ? 1 : 0
            },
            sts: 1
        });

        // Save newly created tracking data
        await trackingData.save();
        return res.status(200).json({ msg: 'Click tracking created', data: trackingData, sts: 1 });
    } catch (err) {
        console.log("🚀 ~ router.post ~ err:", err)
        res.status(500).json({ msg: 'Server error', error: err, sts: 0 });
    }
});


router.put('/click-tracking/:userId/device', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { deviceType } = req.body;

        const trackingData = await clicktrackingSchema.findOne({ userId });

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

        const trackingData = await clicktrackingSchema.findOne({ userId });

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