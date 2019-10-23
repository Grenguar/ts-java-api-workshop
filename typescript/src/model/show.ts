import mongoose from "mongoose";

export interface IShow extends mongoose.Document {
  title: string;
  language: string;
  description: string;
  score: number;
}

export const ShowSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true },
  description: { type: String, required: true },
  score: { type: Number, required: true },
});

const Show = mongoose.model<IShow>("Show", ShowSchema);
export default Show;
