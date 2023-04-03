import { ObjectId } from "mongodb";
import { CreateResultInterface, DocumentInterface } from "@src/database/connection";

interface customer {
  _id: string;
  name: string;
  phone: string;
}

interface ItemConverterInterface {
  name: string;
  multiply: number;
}

export interface CreateItemInterface extends DocumentInterface {
  _id: string;
  code: string;
  name: string;
  chartOfAccount: string;
  hasProductionNumber: boolean;
  hasExpiryDate: boolean;
  unit: string;
  converter: ItemConverterInterface[];
}

export interface ItemInterface extends CreateItemInterface, CreateResultInterface {
  _id: string;
  createdAt: Date;
  createBy_id: string;
}

export const restricted = [];

export class ItemEntity {
  public item: ItemInterface;

  constructor(item: CreateItemInterface) {
    this.item = {
      ...item,
      _id: ObjectId.toString(),
      createdAt: new Date(),
      createBy_id: item._id,
      acknowledged: true,
    };
  }
}
