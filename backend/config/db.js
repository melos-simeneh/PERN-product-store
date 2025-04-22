const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.PG_URL);

async function initDB() {
  try {
    // Creating the products table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing DB:", error.message);
    throw error;
  }
}

module.exports = { sql, initDB };
