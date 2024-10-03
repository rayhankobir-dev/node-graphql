import * as fs from "fs/promises";
import * as path from "path";

export class DB<T> {
  private filePath: string;

  constructor(filename: string) {
    this.filePath = path.join(process.cwd(), "src", "data", filename);
  }

  private async readData(): Promise<T[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (err: any) {
      if (err.code === "ENOENT") {
        return [];
      }
      throw err;
    }
  }

  private async writeData(data: T[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
  }

  public async findAll(): Promise<T[]> {
    return this.readData();
  }

  public async findById(id: string): Promise<T | null> {
    const data = await this.readData();
    return data.find((item: any) => item._id === id) || null;
  }

  public async create(item: T): Promise<T> {
    const data = await this.readData();
    data.push(item);
    await this.writeData(data);
    return item;
  }

  public async findByIdAndUpdate(
    id: string,
    payload: Partial<T>
  ): Promise<T | null> {
    const data = await this.readData();
    const index = data.findIndex((item: any) => item._id === id);
    if (index === -1) {
      return null;
    }
    data[index] = { ...data[index], ...payload };
    await this.writeData(data);
    return data[index];
  }

  public async findByIdAndDelete(id: string): Promise<T | null> {
    const data = await this.readData();
    const index = data.findIndex((item: any) => item._id === id);
    if (index === -1) {
      return null;
    }
    const deletedItem = data[index];
    data.splice(index, 1);
    await this.writeData(data);
    return deletedItem;
  }
}
