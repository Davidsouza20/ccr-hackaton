import express from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";
import PointsController from "./controllers/PointsController";
import PlacesController from "./controllers/PlacesController";

const routes = express();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new PlacesController();

/** Places */
routes.get("/places", itemsController.index);

/** Points */
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

/** Create Point */
routes.post("/points", pointsController.create);

export default routes;
