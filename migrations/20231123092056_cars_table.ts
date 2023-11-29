import { Knex } from "knex";

const CARS_TABLE = "cars";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(CARS_TABLE, (table: Knex.TableBuilder)=>{
        table.increments("id_car").primary();
        table.string("car_name", 255).notNullable();
        table.string("car_type", 255).notNullable();
        table.integer("car_rent_price", 11).notNullable();
        table.string("img_path", 255).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(CARS_TABLE);
}

