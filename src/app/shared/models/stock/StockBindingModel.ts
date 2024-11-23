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
  ItemId!: number;
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
