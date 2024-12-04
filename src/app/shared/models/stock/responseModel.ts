export interface StockUnit {
  Name: string;
  Multiplier: number;
  Decimals: number;
  Id: number;
}

export interface ItemType {
  Name: string;
  SysKey: string;
  Id: number;
}

export interface ItemGroup {
  Name: string;
  TypeId: number;
  Type: ItemType;
  Id: number;
}

export interface Item {
  Name: string;
  StockUnitId: number;
  StockUnit: StockUnit;
  CostingMethod: string;
  InvAmountBasedOn: string;
  GroupId: number;
  Group: ItemGroup;
  Archived: boolean;
  FlgFridgeItem: boolean;
  FlgNorcorticItem: boolean;
  FlgWHT: boolean;
  Id: number;
}

export interface Log {
  CreatedOn: string;
  Creator: string;
  ModifiedOn: string;
  Modifier: string;
}

export interface Row {
  Item: Item;
  StockOpeningId: number;
  ItemId: number;
  UnitId: number;
  Multiplier: number;
  QtyPack: number;
  PricePack: number;
  NetQty: number;
  Remarks: string;
  DisplayOrder: number;
  ProductValue: number;
  Archived: boolean;
  Log: Log;
  Id: number;
}

export interface Warehouse {
  Name: string;
  Id: number;
}

export interface GroupBy {
  Order: number;
  Label: string;
}

export interface Response {
  FlgDraft: boolean;
  Warehouse: Warehouse;
  Rows: Row[];
  Attachments: any[];
  DocDate: string;
  FeatureId: number;
  EntityStatusId: number;
  BookId: number;
  BookSeqNbr: number;
  DocNbr: string;
  FinYearId: number;
  WarehouseId: number;
  TTLRows: number;
  TTLQty: number;
  TTLNetAmount: number;
  TTLAttachments: number;
  PrintTemplateKey: string;
  Archived: boolean;
  GroupBy: GroupBy;
  Log: Log;
  Id: number;
}
