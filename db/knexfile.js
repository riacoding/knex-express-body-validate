// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knex",
      user: "postgres",
      password: "mysecretpassword",
    },
    pool: {
      min: 1,
      max: 1,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
