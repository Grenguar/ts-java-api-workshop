import express, { Request, Response } from "express";
import * as showController from "./controllers/showController";

const app: express.Application = express();
app.use(express.json());

const seriesApi = "/api";

app.get(`${seriesApi}/`, (req: Request, res: Response) => {
  res.status(200).send("Hello ts/java workshop participant!");
});

/**
 * Get all shows
 */
app.route(`${seriesApi}/shows`).get(showController.allShows);

/**
 * Add new show with the request body:
 * {
 *  "title": "Desprate Housewives",
 *   "language": "English",
 *   "description": "TV show about housewives and their adventures",
 *   "score": 78
 * }
 */
app.route(`${seriesApi}/show`).post(showController.addShow);

app
  .route(`${seriesApi}/show/:id`)
  /**
   * Get show with the ID
   */
  .get(showController.getShow)
  /**
   * Delete show by ID
   */
  .delete(showController.deleteShow)
  /**
   * Update show by id and body
   */
  .put(showController.updateShow);

export default app;
