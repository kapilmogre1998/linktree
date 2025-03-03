const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clickTrackingSchema = new Schema({
    linkCount: {
        type: Number,
        default: 0
    },
    shopCount: {
        type: Number,
        default: 0
    },
    sitesCount: {
        type: 
    }
})

module.exports = mongoose.model("clickTracking",clickTrackingSchema);