import { Request, Response } from "express";

export let allShows = (req: Request, res: Response) => {
  res.send("Returns all TV series");
};

export let getShow = (req: Request, res: Response) => {
  res.send("Returns one series");
};

export let deleteShow = (req: Request, res: Response) => {
  res.send("delete series");
};

export let updateShow = (req: Request, res: Response) => {
  res.send("update series");
};

export let addShow = (req: Request, res: Response) => {
  res.send("Add series");
};
