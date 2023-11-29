import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { id_car: 1, car_name: "Doyok", car_type: "small", car_rent_price: 100  },
        { id_car: 2, car_name: "Mobil besar", car_type: "large", car_rent_price: 200  }
    ]);
};
