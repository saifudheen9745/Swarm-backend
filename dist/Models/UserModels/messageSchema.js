"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    chatId: {
        type: mongoose_1.Types.ObjectId
    },
    sender: {
        type: mongoose_1.Types.ObjectId,
        ref: 'users'
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.default = messageSchema;
//# sourceMappingURL=messageSchema.js.map