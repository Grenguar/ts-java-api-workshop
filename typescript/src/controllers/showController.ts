import { Request, Response } from "express";
import Show from "../model/show";
import mongoose from "mongoose";

export class ShowController {
  public async allShows(req: Request, res: Response) {
    await Show.find((err: any, shows: any) => {
      if (err) {
        res.end(err);
      }
      res.json(shows);
    });
  }

  public async addShow(req: Request, res: Response) {
    const newShow = new Show({ ...req.body });
    await newShow.save((err, show) => {
      if (err) {
        res.status(400).end(err);
      }
      res.json(show);
    });
  }

  public async getShow(req: Request, res: Response) {
    const showId = req.params.id;
    if (mongoose.Types.ObjectId.isValid(showId)) {
      await Show.findById(showId, (err: any, show: any) => {
        if (err) {
          res.status(400).end(err);
        } else {
          res.send(show);
        }
      });
    } else {
      res.status(400).json({ type: "Incorrect ID error", message: "ID is incorrect" });
    }
  }

  public async deleteShow(req: Request, res: Response) {
    const showId = req.params.id;
    if (mongoose.Types.ObjectId.isValid(showId)) {
      await Show.deleteOne({ _id: showId }, (err: any) => {
        if (err) {
          res.status(400).end(err);
        } else {
          res.end("Successfully Deleted show");
        }
      });
    } else {
      res.status(400).json({ type: "Incorrect ID error", message: "ID is incorrect" });
    }
  }

  public async updateShow(req: Request, res: Response) {
    await Show.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
      if (err) {
        res.status(400).end(err);
      } else {
        res.send("Successfully updated show!");
      }
    });
  }
}
