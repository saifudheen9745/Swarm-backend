"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatControllers_1 = require("../../Controllers/UserControllers/chatControllers");
const jwtConfig_1 = require("../../JwtConfig/jwtConfig");
const Router = express_1.default.Router();
const { verifyJwtToken } = new jwtConfig_1.jwtOptions();
Router.get('/create/:projectId', verifyJwtToken, chatControllers_1.createChat);
Router.post('/send', verifyJwtToken, chatControllers_1.sendMessage);
exports.default = Router;
//# sourceMappingURL=chatRoute.js.map