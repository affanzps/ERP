
import { Item, Warehouse, Data } from '../shared/models/stock/StockListViewModel';
import { Component } from '@angular/core';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { StockBindingModel } from '../shared/models/stock/StockBindingModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouselist } from '../shared/models/stock/warehouslist';
import { Row} from '../shared/models/stock/StockBindingModel';



@Component({
  selector: 'app-create-edit-stock',
  templateUrl: './create-edit-stock.component.html',
  styleUrls: ['./create-edit-stock.component.scss'] // Corrected the 'styleUrl' to 'styleUrls'
})
export class CreateEditStockComponent {
  newStock: StockBindingModel = new StockBindingModel();
  Warehouselist: Warehouselist[] = []; // Updated to be an array
  rows: Row[] = [];
  selectedProduct: any = null;
  isDropdownOpen: boolean = false;
  productList: any[] = [];



  constructor(
    private stockOpeningService: StockOpeningService,
    private router: Router,
    private route:ActivatedRoute,



  ) {

  }

  ngOnInit(): void {
  this.WarehouseList();
  this.newStock.DocDate=this.getCurrentDate();
    this.fetchProductList();
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  InsertOrUpdateData() {
    this.newStock.Rows = this.rows; // Set rows with the current data
    // Call the insertOrUpdate method from the service
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
  navigateToNewStockOpening() {
    this.router.navigate(['/stock-opening/new']);

  }
  navigateToStockOpeningList(){
  this.router.navigate(['/stock-opening/list']);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
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