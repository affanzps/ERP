export class StockListViewModel {
  Data!: Data[];
  Total!: number;
}

export class Data {
  FlgDraft!: boolean;
  Warehouse!: Warehouse;
  Rows!: Row[];
  Attachments!: any[];
  DocDate!: string;
  FeatureId!: number;
  EntityStatusId!: number;
  BookId!: number;
  BookSeqNbr!: number;
  DocNbr!: string;
  RefDocNbr!: string;
  FinYearId!: number;
  WarehouseId!: number;
  TTLRows!: number;
  TTLQty!: number;
  TTLNetAmount!: number;
  TTLAttachments!: number;
  PrintTemplateKey!: string;
  Archived!: boolean;
  GroupBy!: GroupBy;
  Log!: Log;
  Id!: number;
  isHovered!:false;
}

export class Warehouse {
  Name!: string;
  Id!: number;
}

export class Row {
  Item!: Item;
  StockOpeningId!: number;
  ItemId!: number;
  UnitId!: number;
  Multiplier!: number;
  QtyPack!: number;
  PricePack!: number;
  NetQty!: number;
  Remarks!: string;
  DisplayOrder!: number;
  ProductValue!: number;
  Archived!: boolean;
  Log!: Log;
  Id!: number;

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
  Id!: number [];
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

export class Log {
  CreatedOn!: string;
  Creator!: string;
}

export class GroupBy {
  Order!: number;
  Label!: string;
}
