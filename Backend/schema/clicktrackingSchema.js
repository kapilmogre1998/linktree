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
            required: true
        },
        linkCount: {
            type: String,
            default: 0
        },
        shopCount: {
            type: String,
            default: 0
        },
        getConnectCount: {
            type: String,
            default: 0
        }
    },
    deviceCount: {
        linux: {
            type: String,
            default: 0
        },
        mac: {
            type: String,
            default: 0
        },
        ios: {
            type: String,
            default: 0
        },
        windows: {
            type: String,
            default: 0
        },
        android: {
            type: String,
            default: 0
        },
        others: {
            type: String,
            default: 0
        }
    },
    sitesCount: {
        youtube: {
            type: String,
            default: 0
        },
        facebook: {
            type: String,
            default: 0
        },
        instagram: {
            type: String,
            default: 0
        },
        others: {
            type: String,
            default: 0
        }
    }
    // sitesCount: {
    //     type: 
    // }
})

module.exports = mongoose.model("clickTracking", clickTrackingSchema);