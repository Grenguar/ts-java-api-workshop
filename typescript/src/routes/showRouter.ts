import { Router } from "express";
import { ShowController } from "../controllers/showController";

export default class ShowRouter {
  private router: Router = Router();
  private showController: ShowController = new ShowController();

  get routerInstance(): Router {
    return this.router;
  }

  constructor() {
    this.configRoutes();
  }

  private configRoutes() {
    /**
     * Get all shows
     */
    this.router.route(`/shows/`).get(this.showController.allShows);

    /**
     * Add new show with the request body:
     * {
     *  "title": "Desprate Housewives",
     *   "language": "English",
     *   "description": "TV show about housewives and their adventures",
     *   "score": 78
     * }
     */
    this.router.route(`/show/`).post(this.showController.addShow);

    this.router
      .route(`/show/:id`)
      /**
       * Get show with the ID
       */
      .get(this.showController.getShow)
      /**
       * Delete show by ID
       */
      .delete(this.showController.deleteShow)
      /**
       * Update show by id and body
       */
      .put(this.showController.updateShow);
  }
}
