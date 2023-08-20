"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    chatName: {
        type: String,
        trim: true
    },
    members: [{
            type: String,
        }],
    projectId: {
        type: mongoose_1.Types.ObjectId,
    },
    latestMessage: {
        type: mongoose_1.Types.ObjectId,
        ref: "messages",
        default: null
    }
}, {
    timestamps: true
});
exports.default = chatSchema;
//# sourceMappingURL=chatSchema.js.map