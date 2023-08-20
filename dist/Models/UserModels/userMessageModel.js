"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMessageModal = void 0;
const mongoose_1 = require("mongoose");
const messageSchema_1 = __importDefault(require("./messageSchema"));
exports.userMessageModal = (0, mongoose_1.model)('messages', messageSchema_1.default);
//# sourceMappingURL=userMessageModel.js.map