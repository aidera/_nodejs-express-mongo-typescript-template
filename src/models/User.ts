import { Schema, model, Types, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  links?: string[];
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

export default model<IUser>("User", schema);
