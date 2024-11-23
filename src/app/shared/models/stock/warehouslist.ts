export class Log {
  CreatedOn!: string; // DateTime in ISO 8601 format
  Creator!: string;   // Creator's name or identifier
}

export class Warehouselist {
  EntityStatusId!: number;  // Status identifier of the entity
  Name!: string;            // Full name of the warehouse
  ShortName!: string;       // Short name of the warehouse
  FlgHasChildren!: boolean; // Indicates if the warehouse has child entities
  DisplayOrder!: number;    // Display order for sorting
  FlgContainStock!: boolean; // Indicates if the warehouse contains stock
  Level!: number;           // Hierarchical level of the warehouse
  Archived!: boolean;       // Indicates if the warehouse is archived
  Log!: Log;                // Log information containing created date and creator
  Id!: number;              // Unique identifier of the warehouse
}
