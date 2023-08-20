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
exports.chatRepository = void 0;
const projectModel_1 = require("../../Models/UserModels/projectModel");
const userChatModel_1 = require("../../Models/UserModels/userChatModel");
const userMessageModel_1 = require("../../Models/UserModels/userMessageModel");
class chatRepository {
    createAChatInDb(projectId) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isProjectExist = yield projectModel_1.userProjectSchema.find({ _id: projectId });
                if (isProjectExist) {
                    const isChatExist = yield userChatModel_1.userChatModel.findOne({
                        projectId: projectId,
                    });
                    if (!isChatExist) {
                        var chat = yield userChatModel_1.userChatModel.create({
                            chatName: (_a = isProjectExist === null || isProjectExist === void 0 ? void 0 : isProjectExist[0]) === null || _a === void 0 ? void 0 : _a.name,
                            projectId: (_b = isProjectExist === null || isProjectExist === void 0 ? void 0 : isProjectExist[0]) === null || _b === void 0 ? void 0 : _b._id,
                            members: (_c = isProjectExist === null || isProjectExist === void 0 ? void 0 : isProjectExist[0]) === null || _c === void 0 ? void 0 : _c.members,
                        });
                    }
                    // return await userChatModel.aggregate([
                    //   {
                    //     $match: {
                    //       $or: [{ _id: chat?._id }, { _id: isChatExist?._id }],
                    //     },
                    //   },
                    //   {
                    //     $lookup: {
                    //       from: "users",
                    //       localField: "members",
                    //       foreignField: "email",
                    //       as: "members",
                    //     },
                    //   },
                    //   {
                    //     $lookup: {
                    //       from: "messages",
                    //       let: { chatId: "$_id" },
                    //       pipeline: [
                    //         {
                    //           $match: {
                    //             $expr: {
                    //               $eq: ["$chatId", "$$chatId"],
                    //             },
                    //           },
                    //         },
                    //       ],
                    //       as: "messages",
                    //     },
                    //   },
                    // ]);
                    return yield userChatModel_1.userChatModel.aggregate([
                        {
                            $match: {
                                $or: [{ _id: chat === null || chat === void 0 ? void 0 : chat._id }, { _id: isChatExist === null || isChatExist === void 0 ? void 0 : isChatExist._id }],
                            },
                        },
                        {
                            $lookup: {
                                from: "users",
                                localField: "members",
                                foreignField: "email",
                                as: "members",
                            },
                        },
                        {
                            $lookup: {
                                from: "messages",
                                let: { chatId: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $eq: ["$chatId", "$$chatId"],
                                            },
                                        },
                                    },
                                    {
                                        $lookup: {
                                            from: "users",
                                            localField: "sender",
                                            foreignField: "_id",
                                            as: "senderDetails"
                                        }
                                    },
                                    {
                                        $addFields: {
                                            sender: { $arrayElemAt: ["$senderDetails", 0] }
                                        }
                                    },
                                    {
                                        $project: {
                                            senderDetails: 0
                                        }
                                    }
                                ],
                                as: "messages",
                            },
                        },
                    ]);
                }
                else {
                    throw { msg: "Project not found" };
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    saveAMessageInDb(messageObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dbResponse = yield userMessageModel_1.userMessageModal.create(messageObj);
                dbResponse = yield dbResponse.populate("sender");
                yield userChatModel_1.userChatModel.updateOne({ _id: dbResponse === null || dbResponse === void 0 ? void 0 : dbResponse.chatId }, { $set: { latestMessage: dbResponse._id } });
                return dbResponse;
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.chatRepository = chatRepository;
//# sourceMappingURL=chatRepository.js.map