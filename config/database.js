module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5433),
      database: env("DATABASE_NAME", "assignmentSanta"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Education@123"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: { rejectUnauthorized: false },
    },
  },
});
