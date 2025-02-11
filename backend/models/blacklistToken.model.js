const mongoose = require('mongoose');

// Define the schema for blacklisted tokens with TTL
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600 // TTL (Token auto-deletes after 1 hour)
    }
});

// Prevent re-compiling the model if already defined
const BlacklistToken = mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;
