import { Response } from "../types";
import { DB } from "../lib/db";

export class ResponseService {
  private static db = new DB<Response>("response.json");

  public static async getAll() {
    return await this.db.findAll();
  }

  public static async getById(id: string) {
    return await this.db.findById(id);
  }
}
