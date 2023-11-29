import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: "binar_car",
      user: "firhan123",
      password: "firhan",
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "binar_car",
      user: "firhan123",
      password: "firhan"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "binar_car",
      user: "firhan123",
      password: "firhan"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
