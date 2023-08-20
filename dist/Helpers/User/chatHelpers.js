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
exports.chatHelpers = void 0;
const chatRepository_1 = require("../../Repostory/UserRepository/chatRepository");
const { createAChatInDb, saveAMessageInDb } = new chatRepository_1.chatRepository();
class chatHelpers {
    createAChat(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield createAChatInDb(projectId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    sendAChat(messageObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield saveAMessageInDb(messageObj);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.chatHelpers = chatHelpers;
//# sourceMappingURL=chatHelpers.js.map