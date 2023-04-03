// import { ObjectId } from "mongodb";
import { CreateItemInterface, ItemEntity, ItemInterface } from "../entities/item.entity.js";
import { ItemRepository } from "../repositories/item.repository.js";
import DatabaseConnection /* , { DocumentInterface } */ from "@src/database/connection.js";

export class CreateItemService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(doc: CreateItemInterface, session: unknown): Promise<ItemInterface> {
    const itemEntity = new ItemEntity({
      _id: doc._id,
      code: doc.code,
      name: doc.name,
      chartOfAccount: doc.chartOfAccount,
      hasProductionNumber: doc.hasProductionNumber,
      hasExpiryDate: doc.hasExpiryDate,
      unit: doc.unit,
      converter: doc.converter,
    });

    const { _id, acknowledged } = await new ItemRepository(this.db).create(itemEntity.item, { session });
    return {
      ...itemEntity.item,
      _id,
      acknowledged,
    };
  }
}
