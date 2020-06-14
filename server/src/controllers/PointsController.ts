import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    const serializedPoints = points.map((item) => {
      return {
        ...points,
        image_url: `http://192.168.0.13:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "Point not found." });
    }

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.0.13:3333/uploads/${point.image}`,
    };

    return response.json({ point: serializedPoint, items });
  }

  async create(request: Request, response: Response) {
    const {
      place_id,
      name,
      description,
      latitude,
      longitude,
      city,
      uf,
    } = request.body;

    const point = {
      place_id,
      name,
      description,
      latitude,
      longitude,
      city,
      uf,
    };

    const places = await knex('places').select('id');

    if (place_id > places.length) {
      return response.json({error: 'Tipo de local não cadastrado'});
    }

    const insertedIds = await knex("points").insert(point);

    return response.json({
      id: insertedIds[0],
      ...point,
    });
  }
}

export default PointsController;
