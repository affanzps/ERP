

import { Component } from '@angular/core';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { StockBindingModel } from '../shared/models/stock/StockBindingModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouselist } from '../shared/models/stock/warehouslist';
import { Row} from '../shared/models/stock/StockBindingModel';
import { InventoryItem } from '../shared/models/stock/InventoryListModel';




@Component({
  selector: 'app-create-edit-stock',
  templateUrl: './create-edit-stock.component.html',
  styleUrls: ['./create-edit-stock.component.scss'] // Corrected the 'styleUrl' to 'styleUrls'
})
export class CreateEditStockComponent {
  newStock: StockBindingModel = new StockBindingModel();
  Warehouselist: Warehouselist[] = [];
  rows: Row[] = [];
  selectedProduct: any = null;
  isDropdownOpen: boolean = false;
  InventoryProduct:InventoryItem []=[];



  constructor(
    private stockOpeningService: StockOpeningService,
    private router: Router,
    private route:ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
  this.WarehouseList();
  this.newStock.DocDate=this.getCurrentDate();
    this.InventoryList();

  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  InsertOrUpdateData() {
    this.newStock.Rows = this.rows;

    this.stockOpeningService.insertOrUpdate(this.newStock).subscribe(response => {
      console.log(response);
      if (response && response.FlgDraft === false) {

        this.newStock.Rows = response.Rows;
        this.rows = this.newStock.Rows;
        this.router.navigate(['/stock-opening/list']);
      }
    }, error => {
      console.error('Error:', error);
    });
  }
  onHover(item: any) {
    item.isHovered = true;
  }
  onLeave(item: any) {
    item.isHovered = false;
  }

  WarehouseList(){
    const payload = {
      "CacheEntities": []
    };
    this.stockOpeningService.warehouselist(payload).subscribe(response => {
      console.log(response);
      this.Warehouselist = response;
    }, error => {
      console.error('Error:', error);
    });
  }
InventoryList(){
  this.stockOpeningService.inventory().subscribe(response=>{
    console.log(response);
    this.InventoryProduct=response;
  })
}
   addRow() {
    const newRow: Row = {
      Id: null,
      ItemId: null,
      PricePack: 0,
      NetQty: 0,
      ProductValue: 0,
      ItemLot: null,
      Remarks: '',
      Log: null,
      Archived: false,
      Editing: true,
      Errors: [],
      QtyPack: 0,
      isHovered: false
    };
    this.rows.push(newRow);
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }
  updatevalue(index:number){
    const row = this.rows[index];

    const qty = row.NetQty || 0; // Default to 0 if undefined or null
    const price = row.PricePack || 0;
    console.log('NetQty:', qty, 'PricePack:', price);

    row.ProductValue = qty * price;
    console.log('Updated ProductValue:', row.ProductValue);
   row.QtyPack=row.NetQty;


  }
  navigateToNewStockOpening() {
    this.router.navigate(['/stock-opening/new']);

  }
  navigateToStockOpeningList(){
  this.router.navigate(['/stock-opening/list']);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectProduct(product: any): void {
    this.selectedProduct = product;
    this.isDropdownOpen = false;
  }



}
