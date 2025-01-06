export interface StockListViewModel {
  Data: Data[];
  Total: number;
}

export interface Data {
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
  RefDocNbr: string;
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
  isHovered: boolean; // Corrected from `!: false` to just `boolean`
}

export interface Warehouse {
  Name: string;
  Id: number;
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

export interface Item {
  Name: string[];
  StockUnitId: number;
  StockUnit: StockUnit;
  CostingMethod: string;
  InvAmountBasedOn: string;
  GroupId: number;
  Group: Group;
  Archived: boolean;
  Id: number[];
}

export interface StockUnit {
  Name: string;
  Multiplier: number;
  Decimals: number;
  Id: number;
}

export interface Group {
  Name: string;
  TypeId: number;
  Type: Type;
  Id: number;
}

export interface Type {
  Name: string;
  SysKey: string;
  Id: number;
}

export interface Log {
  CreatedOn: string;
  Creator: string;
}

export interface GroupBy {
  Order: number;
  Label: string;
}
