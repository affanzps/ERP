export class StockBindingModel {
  Id!: number | null;
  DocNbr!: string | null;
  WarehouseId!: number;
  Warehouse!: Warehouse | null;
  DocDate!: string;
  RefDocNbr!: string | null;
  BookId!: number | null;
  BookSeqNbr!: number | null;
  Rows!: Row[];
  Remarks!: string | null;
  Attachments!: any[] | null;
  TTLAttachments!: number | null;
  TTLComments!: string | null;
  PrintTemplateKey!: string;
}

export class Warehouse {
  Name!: string | null;
  Id!: number;
}

export class Row {
  Id!: number | null;
  ItemId!: number |null ;

  PricePack!: number;
  NetQty!: number;
  ProductValue!: number;
  ItemLot!: string | null;
  Remarks!: string;
  Log!: Log | null;
  Archived!: boolean;
  Editing!: boolean;
  Errors!: any[] | null;
  QtyPack!: number;
  isHovered!:false;
}

export class Log {
  CreatedOn!: string | null;
  Creator!: string | null;
}
export class Item {
  Name!: string [];
  StockUnitId!: number;
  StockUnit!: StockUnit;
  CostingMethod!: string;
  InvAmountBasedOn!: string;
  GroupId!: number;
  Group!: Group;
  Archived!: boolean;
  Id!: number;
}
export class StockUnit {
  Name!: string;
  Multiplier!: number;
  Decimals!: number;
  Id!: number;
}

export class Group {
  Name!: string;
  TypeId!: number;
  Type!: Type;
  Id!: number;
}
export class Type {
  Name!: string;
  SysKey!: string;
  Id!: number;
}
