import { Request, Response } from "express";
import knex from "../database/connection";

class PlacesController {
  async index(request: Request, response: Response) {
    const places = await knex("places").select("*");

    const serializedItems = places.map((place) => {
      return {
        id: place.id,
        title: place.place,
        image_url: `http://192.168.0.108:3333/uploads/${place.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default PlacesController;
