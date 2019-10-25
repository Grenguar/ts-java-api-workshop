import express, { Request, Response } from "express";

export const app: express.Application = express();

app.get(`/`, (req: Request, res: Response) => {
  res.status(200).send("Hello ts/java workshop participant!");
});

export default app;
