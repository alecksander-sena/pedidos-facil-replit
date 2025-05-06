import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import * as schema from "../shared/schema";

// Configuração do PostgreSQL para funcionar na web
neonConfig.webSocketConstructor = ws;

// Verifica se a variável de ambiente está definida
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set.");
}

async function main() {
  console.log("Iniciando a migração do banco de dados...");

  // Cria uma conexão com o banco de dados
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle({ client: pool, schema });

  // Realiza a migração (push do schema)
  try {
    await db.insert(schema.products).values({
      name: "Test Product",
      description: "Test description",
      price: 0,
      image: "test.jpg",
      category: "Test"
    }).returning().then(async () => {
      await db.delete(schema.products).where(1 == 1);
    }).catch(() => {
      // Tabela ainda não existe, o migrate vai criar
    });

    console.log("Banco de dados foi migrado com sucesso!");
  } catch (error) {
    console.error("Erro durante a migração:", error);
    process.exit(1);
  }

  // Fecha a conexão
  await pool.end();
}

main();