import express, { Request, Response } from "express";
import * as showController from "./controllers/showController";

export const app: express.Application = express();
app.use(express.json());

const seriesApi = "/api";

app.get(`${seriesApi}/allShows`, showController.allShows);
app.get(`${seriesApi}/show/:id`, showController.getShow);
app.post(`${seriesApi}/show`, showController.addShow);
app.put(`${seriesApi}/show/:id`, showController.updateShow);
app.delete(`${seriesApi}/show/:id`, showController.deleteShow);

app.get(`${seriesApi}/`, (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send("Hello ts/java workshop participant!");
});

export default app;
