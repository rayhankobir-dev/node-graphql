import { Trigger } from "../types";
import { DB } from "../lib/db";

export class TriggerService {
  private static db = new DB<Trigger>("trigger.json");

  public static async getAll() {
    return await this.db.findAll();
  }

  public static async getById(id: string) {
    return await this.db.findById(id);
  }
}
