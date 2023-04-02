interface customer {
  _id: string;
  name: string;
  phone: string;
}

interface CreateItemInterface {
  _id: string;
  code: string;
  name: string;
  chartOfAccount: string;
  hasProductionNumber: boolean;
  hasExpiryDate: boolean;
  unit: string;
  converter: [
    {
      name: string;
      multiply: number;
    }
  ];
}

export interface ItemInterface extends CreateItemInterface {
  createdAt: Date;
  createBy_id: string;
  // _id: string;
  // customer_id: customer;
  // date: Date;
  // total: string[];
}

export const restricted = [];

export class ItemEntity {
  public item: ItemInterface | CreateItemInterface;

  constructor(item: ItemInterface | CreateItemInterface) {
    this.item = item;
  }
}
