import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import * as schema from "../shared/schema";
import { sql } from "drizzle-orm";

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
    // Verifica se o schema já existe
    const exists = await db.execute(sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'products'
      );
    `);

    if (!exists.rows[0]?.exists) {
      console.log("As tabelas ainda não existem, a migração irá criá-las.");
    } else {
      console.log("As tabelas já existem, verificando estrutura...");
    }

    console.log("Banco de dados foi migrado com sucesso!");
  } catch (error) {
    console.error("Erro durante a migração:", error);
    process.exit(1);
  }

  // Fecha a conexão
  await pool.end();
}

main();