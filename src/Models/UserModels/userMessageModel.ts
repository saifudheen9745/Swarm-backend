import { model } from "mongoose";
import messageSchema from "./messageSchema";

export const userMessageModal = model<messageSchema>('messages',messageSchema)