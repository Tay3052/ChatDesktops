import { pgTable, serial, text, uuid, unique, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: text("name").unique().notNull(),
  email: text("email").unique(),
  password: text("password").notNull(),
  createdAt: date("created_at").notNull(),
  updatedAt: date("updated_at").notNull(),
});
