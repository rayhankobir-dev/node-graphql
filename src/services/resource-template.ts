import { ResourceTemplate } from "../types";
import { DB } from "../lib/db";

export class ResourceTemplateService {
  private static db = new DB<ResourceTemplate>("templateResource.json");

  public static async getAll() {
    return await this.db.findAll();
  }

  public static async getById(id: string) {
    return await this.db.findById(id);
  }
}
