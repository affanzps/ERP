
import { StockListViewModel } from './../shared/models/stock/StockListViewModel';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { StockBindingModel } from '../shared/models/stock/StockBindingModel';
import { Warehouselist } from '../shared/models/stock/warehouslist';
import { Row } from '../shared/models/stock/StockBindingModel';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss'],
})


export class EditStockComponent {
  newStock: StockBindingModel = new StockBindingModel();
    Warehouselist: Warehouselist[] = [];
  rows: Row[] = [];
  selectedProduct: any = null;
  isDropdownOpen: boolean = false;
  productList: any[] = [];
  recordId!:number;




  constructor(
    private stockOpeningService: StockOpeningService,
    private router: Router,
    private route:ActivatedRoute


  ) {

  }

  ngOnInit(): void {
  this.WarehouseList();
  this.recordId = Number(this.route.snapshot.paramMap.get('id'));
  console.log(this.recordId);
  this.getStockListById(this.recordId);
    // this.fetchProductList();
  }


  getStockListById(id: number): void {
    debugger;
    this.stockOpeningService.edit(id).subscribe(
      response => {
        this.newStock = response;
        this.rows = response.Rows || [];  // Make sure rows are updated
      },
      error => {
        console.error('Error fetching:', error);
      }
    );
  }


  InsertOrUpdateData() {
    this.newStock.Id=this.recordId;
    this.stockOpeningService.insertOrUpdate(this.newStock).subscribe(response => {
      console.log(response);
      if (response && response.FlgDraft === false) {
        // Optionally handle success response
        this.newStock.Rows = response.Rows;  // Update rows if needed
        this.rows = this.newStock.Rows;      // Update the table rows
        this.router.navigate(['/stock-opening/list']);  // Navigate after success
      }
    }, error => {
      console.error('Error:', error);
      // Optionally handle error (e.g., show error message to the user)
    });
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

   // Add a new row (example functionality)
  addRow() {
    const newRow: Row = {
      Id: null,
      ItemId: 0,
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
      isHovered:false
    };
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
  navigateToStockOpeningList() {
    this.router.navigate(['/stock-opening/list']);

  }

  navigateToStockOpeningListnew() {
    this.router.navigate(['/stock-opening/new']);

  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onHover(item: any) {
    item.isHovered = true;
  }
  onLeave(item: any) {
    item.isHovered = false;
  }


  fetchProductList() {
    this.stockOpeningService.inventory().subscribe({
      next: (data) => {
        this.productList = data;  // Corrected to 'data' instead of 'Data'
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }


  selectProduct(product: any): void {
    this.selectedProduct = product;
    this.isDropdownOpen = false;  // Close the dropdown after selection
  }



}
