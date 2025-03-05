const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clickTrackingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    monthlyStats: {
        linkCount: {
            type: Number,
            default: 0
        },
        shopCount: {
            type: Number,
            default: 0
        },
        getConnectCount: {
            type: Number,
            default: 0
        }
    },
    deviceCount: {
        linux: {
            type: Number,
            default: 0,
            date: new Date()
        },
        mac: {
            type: Number,
            default: 0,
            date: new Date()
        },
        ios: {
            type: Number,
            default: 0,
            date: new Date()
        },
        windows: {
            type: Number,
            default: 0,
            date: new Date()
        },
        android: {
            type: Number,
            default: 0,
            date: new Date()
        },
        others: {
            type: Number,
            default: 0,
            date: new Date()
        }
    },
    sitesCount: [{
        type: {
            type: String,
        },
        id: {
            type: String
        },
        title: {
            type: String
        },
        count: {
            type: Number
        }
    }],
    socialMediaCount: [{
        type: {
            type: String,
            enum: ['INSTAGRAM', 'YOUTUBE', 'FACEBOOK', 'OTHER']
        },
        count: {
            type: Number
        }
    }]
})

module.exports = mongoose.model("clickTracking", clickTrackingSchema);