import app from "./app";
import mongoose from "mongoose";
import { MongoError } from "mongodb";
const PORT: number = 8080;

const uri: string | undefined = process.env.MONGO_URL;

const connectToDb = async () => {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  await mongoose.connect(uri!, connectionOptions, (err: MongoError) => {
    if (err) {
      console.log(err);
    }
    console.log("MongoDB connected");
  });
};

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`View modules app listening on port ${PORT}`);
});
