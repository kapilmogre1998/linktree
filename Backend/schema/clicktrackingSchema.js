const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clickTrackingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    monthlyStats: {
        month: {
            type: String, // you can use 'YYYY-MM' format
        },
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
            default: 0
        },
        mac: {
            type: Number,
            default: 0
        },
        ios: {
            type: Number,
            default: 0
        },
        windows: {
            type: Number,
            default: 0
        },
        android: {
            type: Number,
            default: 0
        },
        others: {
            type: Number,
            default: 0
        }
    },
    sitesCount: {
        youtube: {
            type: Number,
            default: 0
        },
        facebook: {
            type: Number,
            default: 0
        },
        instagram: {
            type: Number,
            default: 0
        },
        others: {
            type: Number,
            default: 0
        }
    }
})

module.exports = mongoose.model("clickTracking", clickTrackingSchema);