import { Request, Response } from "express";

export let allShows = (req: Request, res: Response) => {
  res.send("Returns all TV shows");
};

export let getShow = (req: Request, res: Response) => {
  res.send("Returns one show");
};

export let deleteShow = (req: Request, res: Response) => {
  res.send("delete show");
};

export let updateShow = (req: Request, res: Response) => {
  res.send("update show");
};

export let addShow = (req: Request, res: Response) => {
  res.send("Add show");
};
