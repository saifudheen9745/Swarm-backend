"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userChatModel = void 0;
const mongoose_1 = require("mongoose");
const chatSchema_1 = __importDefault(require("./chatSchema"));
exports.userChatModel = (0, mongoose_1.model)("chatSchema", chatSchema_1.default, 'chats');
//# sourceMappingURL=userChatModel.js.map