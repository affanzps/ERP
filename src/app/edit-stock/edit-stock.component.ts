import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { StockBindingModel } from '../shared/models/stock/StockBindingModel';
import { Warehouselist } from '../shared/models/stock/warehouslist';
import { Row, Item } from '../shared/models/stock/StockBindingModel';
import { InventoryItem } from '../shared/models/stock/InventoryListModel';
import { Response } from '../shared/models/stock/responseModel';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss'],
})

export class EditStockComponent implements OnInit {
  public stockOpeningData: Response | null = null;
  newStock: StockBindingModel = new StockBindingModel();
  Warehouselist: Warehouselist[] = [];
  rows: Row[] = [];
  items: Item[] = [];
  selectedProduct: any = null;
  isDropdownOpen: boolean = false;
  InventoryProduct: InventoryItem[] = [];
  recordId!: number;

  dropdownOpenIndex: number | null = null;
  filteredItems: any[][] = [];

  constructor(
    private stockOpeningService: StockOpeningService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.InventoryList();
    this.WarehouseList();

    this.recordId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.recordId);
    this.getStockListById(this.recordId);
  }

  // Fetch stock data by ID
  getStockListById(id: number): void {

    this.stockOpeningService.edit(id).subscribe(
      response => {
        debugger
        if (response) {
          this.stockOpeningData = response;
          this.newStock = response;
          this.rows = response.Rows || [];
          console.log('Rows:', this.rows);
        } else {
          console.warn('Empty response received.');
        }
      },
      error => {
        console.error('Error fetching stock data:', error);
      }
    );
  }
  filterItems(input: string, index: number): void {
    if (!this.filteredItems[index]) {
      this.filteredItems[index] = [...this.InventoryProduct];
    }

    this.filteredItems[index] = this.InventoryProduct.filter(item =>
      item.Name.toLowerCase().includes(input.toLowerCase())
    );
  }


 getItemNameById(itemId: any): string {
  if (!this.InventoryProduct || !Array.isArray(this.InventoryProduct)) {
    console.error('InventoryProduct is not defined or not an array.');
    return '';
  }
  const item = this.InventoryProduct.find(item => item.Id === itemId);
  return item ? item.Name : '';
}

  InventoryList() {
    this.stockOpeningService.inventory().subscribe(response => {
      console.log(response);
      this.InventoryProduct = response;
      console.log("inentorydata",this.InventoryProduct)
    });
  }

  onItemChange(row: any) {
    console.log('Updated row:', row);
  }
  updateItem(index: number): void {
    console.log('Updated ItemId for row:', this.rows[index].ItemId);
    this.dropdownOpenIndex = null;
  }
  // Insert or update stock data
  InsertOrUpdateData() {
    this.newStock.Id = this.recordId;
    this.stockOpeningService.insertOrUpdate(this.newStock).subscribe(response => {
      console.log(response);
      if (response && response.FlgDraft === false) {
        // Optionally handle success response
        this.newStock.Rows = response.Rows;  // Update rows if needed
        this.rows = [...this.newStock.Rows];  // Update the table rows
        this.router.navigate(['/stock-opening/list']);  // Navigate after success
      }
    }, error => {
      console.error('Error:', error);
    });
  }

  // Fetch warehouse list
  WarehouseList() {
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

  // Add a new row
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
    //this.rows = [...this.rows, { ...newRow }];
    this.rows.push(newRow);
  }

  // Delete a row
  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  updatevalue(index:number){
    const row = this.rows[index];

    // Ensure QtyPack and PricePack are numbers
    const qty = row.NetQty || 0; // Default to 0 if undefined or null
    const price = row.PricePack || 0;
    console.log('NetQty:', qty, 'PricePack:', price); // Debugging values

    // Update ProductValue
    row.ProductValue = qty * price;
    console.log('Updated ProductValue:', row.ProductValue); // Verify calculation
   row.QtyPack=row.NetQty;


  }
  // Navigate to stock opening list
  navigateToStockOpeningList() {
    this.router.navigate(['/stock-opening/list']);
  }

  // Navigate to new stock opening page
  navigateToStockOpeningListnew() {
    this.router.navigate(['/stock-opening/new']);
  }


  // Hover events for row
  onHover(item: any) {
    item.isHovered = true;
  }

  onLeave(item: any) {
    item.isHovered = false;
  }

  // Select product from dropdown
  selectProduct(product: any): void {
    this.selectedProduct = product;
    this.isDropdownOpen = false;  // Close the dropdown after selection
  }
}
