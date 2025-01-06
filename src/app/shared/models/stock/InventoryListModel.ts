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

export interface StockUnit {
  Name: string;
  Multiplier: number;
  Decimals: number;
  Id: number;
}

export interface Manufacturer {
  Name: string;
  Id: number;
}

export interface InventoryItem {
  Group: Group;
  StockUnit: StockUnit;
  Manufacturer: Manufacturer;
  SalePrice: number;
  SaleDiscRatio: number;
  SaleDiscValue: number;
  EntityStatusId: number;
  Owner: string;
  Name: string;
  StockUnitId: number;
  GroupId: number;
  ManufacturerId: number;
  FlgSaleable: boolean;
  RetailPrice: number;
  TradePrice: number;
  InvAmountBasedOn: string;
  CostingMethod: string;
  FlgPurchasable: boolean;
  PurPrice: number;
  PurDiscRatio: number;
  PurDiscValue: number;
  FlgTrackInventory: boolean;
  FlgNorcorticItem: boolean;
  FlgFridgeItem: boolean;
  FlgWHT: boolean;
  FlgGST: boolean;
  Archived: boolean;
  Id: number;
}
