"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.createChat = void 0;
const chatHelpers_1 = require("../../Helpers/User/chatHelpers");
const { createAChat, sendAChat } = new chatHelpers_1.chatHelpers();
const createChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield createAChat(req.params.projectId);
        res.status(200).json(dbResponse === null || dbResponse === void 0 ? void 0 : dbResponse[0]);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.createChat = createChat;
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield sendAChat(req.body);
        res.status(200).json(dbResponse);
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.sendMessage = sendMessage;
//# sourceMappingURL=chatControllers.js.map