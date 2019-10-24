import express from "express";
import mongoose from "mongoose";
import { MongoError } from "mongodb";
import ShowRouter from "./routes/showRouter";

export default class App {
  private app: express.Application = express();
  private mongoUrl: string | undefined = process.env.MONGO_URL;
  private showRouter: ShowRouter = new ShowRouter();

  get appInstance(): express.Application {
    return this.app;
  }

  constructor() {
    this.config();
    this.mongoDBsetup();
  }

  private config() {
    this.app.use(express.json());
    this.app.use("/api/", this.showRouter.routerInstance);
  }

  private mongoDBsetup() {
    mongoose.Promise = global.Promise;
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    mongoose.connect(this.mongoUrl!, connectionOptions, (err: MongoError) => {
      if (err) {
        console.log(err);
      }
      console.log("MongoDB connected");
    });
  }
}
