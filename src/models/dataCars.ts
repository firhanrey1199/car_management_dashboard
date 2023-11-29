import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id_car!: number;
  car_name!: string;
  car_type!: string;
  car_rent_price!: number;
  img_path!: string;

  static get tableName() {
    return "cars";
  }
}

export type CarsDataModel = ModelObject<CarsModel>;