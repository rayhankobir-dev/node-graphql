import { NodeObject } from "../types";
import { DB } from "../lib/db";

export class NodeService {
  private static db = new DB<NodeObject>("node.json");

  public static async getAll() {
    return await this.db.findAll();
  }

  public static async getById(id: string) {
    return await this.db.findById(id);
  }
}
