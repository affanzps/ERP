export interface StockBindingModel {
  Id: number | null;
  DocNbr: string | null;
  WarehouseId: number;
  Warehouse: Warehouse | null;
  DocDate: string;
  RefDocNbr: string | null;
  BookId: number | null;
  BookSeqNbr: number | null;
  Rows: Row[];
  Remarks: string | null;
  Attachments: any[] | null;
  TTLAttachments: number | null;
  TTLComments: string | null;
  PrintTemplateKey: string;
}

export interface Warehouse {
  Name: string | null;
  Id: number;
  EntityStatusId: number;
  ShortName: string;
  FlgHasChildren: boolean;
  DisplayOrder: number;
  FlgContainStock: boolean;
  Level: number;
  Archived: boolean;
  Log: Log;
}

export interface Row {
  Id: number | null;
  ItemId: number | null;
  PricePack: number;
  NetQty: number;
  ProductValue: number;
  ItemLot: string | null;
  Remarks: string;
  Log: Log | null;
  Archived: boolean;
  Editing: boolean;
  Errors: any[] | null;
  QtyPack: number;
  isHovered: boolean;
}

export interface Log {
  CreatedOn: string | null;
  Creator: string | null;
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
  Id: number;
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
