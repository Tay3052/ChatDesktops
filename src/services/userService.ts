import { db } from "../db/index";
import { users } from "../models/model";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const id = uuidv4(); // UUIDを生成
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    await db.insert(users).values({ id, name, password, createdAt, updatedAt });
  } catch (e) {
    console.error(e);
  }
};
