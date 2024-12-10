const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // TTL: 24 hours (in seconds)
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
