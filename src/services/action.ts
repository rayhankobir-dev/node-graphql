import { Action } from "../types";
import { DB } from "../lib/db";

export class ActionService {
  private static db = new DB<Action>("action.json");

  public static async getAll() {
    return await this.db.findAll();
  }

  public static async getById(id: string) {
    return await this.db.findById(id);
  }
}
