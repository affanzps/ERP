import { Component, OnInit } from '@angular/core';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { Warehouse } from '../shared/models/stock/StockBindingModel';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryItem } from '../shared/models/stock/InventoryListModel';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-stock',
  templateUrl: './create-edit-stock.component.html',
  styleUrls: ['./create-edit-stock.component.scss']
})
export class CreateEditStockComponent implements OnInit {
  stockForm!: FormGroup;
  Warehouselist: Warehouse[]=[];
  InventoryProduct: InventoryItem[] = [];
  selectedProduct: any = null;
  isDropdownOpen: boolean = false;
  recordId!: number;
  readOnlyRows: boolean[] = [];


  constructor(
    private stockOpeningService: StockOpeningService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.WarehouseList();
    this.InventoryList();
    this.recordId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.recordId) {
      this.loadStockData(this.recordId);
    }


  }

  private initializeForm(): void {
    this.stockForm = this.fb.group({
      DocDate: [this.getCurrentDate(), Validators.required],
      RefDocNbr: [''],
      WarehouseId: ['', Validators.required],
      rows: this.fb.array([]),
    });
  }

  get rows(): FormArray {
    return this.stockForm.get('rows') as FormArray;
  }

  addRow(data: any = null): void {
    const row = this.fb.group({
      ItemId: [data?.ItemId || '', Validators.required],
      NetQty: [data?.NetQty || '', [Validators.required, Validators.min(0)]],
      PricePack: [data?.PricePack || '', [Validators.required, Validators.min(0)]],
      ProductValue: [{ value: data?.ProductValue || '', disabled: true }],
      Remarks: [data?.Remarks || ''],
      BnsQty: [data?.BnsQty || '', Validators.min(0)],
      QtyPack: [data?.QtyPack || '']
    });
    this.rows.push(row);

    this.readOnlyRows.push(true);
  }
  deleteRow(index: number): void {
    this.rows.removeAt(index);
  }

  private loadStockData(id: number): void {
    this.stockOpeningService.edit(id).subscribe(
      (response) => {
        this.patchForm(response);
      },
      (error) => {
        console.error('Error loading stock data:', error);
      }
    );
  }

  private patchForm(data: any): void {
    this.stockForm.patchValue({
      DocDate: data.DocDate,
      RefDocNbr: data.RefDocNbr,
      WarehouseId: data.WarehouseId
    });

    this.rows.clear();

    data.Rows.forEach((row: any) => {
      this.addRow(row);
    });
    this.rows.controls.forEach((row) => row.disable());

  }


  updateValue(index: number): void {
    const row = this.rows.at(index) as FormGroup;
    const qty = row.get('NetQty')?.value || 0;
    const price = row.get('PricePack')?.value || 0;
    const productValue = qty * price;
    row.get('ProductValue')?.setValue(productValue, { emitEvent: false });
    row.get('QtyPack')?.setValue(qty);
  }

  InsertOrUpdateData(): void {
    if (this.stockForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const formData = this.stockForm.getRawValue();
    this.stockOpeningService.insertOrUpdate(formData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.router.navigate(['/stock-opening/list']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  WarehouseList(): void {
    const payload = { CacheEntities: [] };
    this.stockOpeningService.warehouselist(payload).subscribe(
      (response) => {
        this.Warehouselist = response;
      },
      (error) => {
        console.error('Error fetching warehouses:', error);
      }
    );
  }

  InventoryList(): void {
    this.stockOpeningService.inventory().subscribe(
      (response) => {
        this.InventoryProduct = response;
      },
      (error) => {
        console.error('Error fetching inventory:', error);
      }
    );
  }

  private getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  navigateToNewStockOpening(): void {
    this.router.navigate(['/stock-opening/new']);
  }

  navigateToStockOpeningList(): void {
    this.router.navigate(['/stock-opening/list']);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectProduct(product: any): void {
    this.selectedProduct = product;
    this.isDropdownOpen = false;
  }
 toggleRowReadOnly(index: number): void {
  this.readOnlyRows[index] = !this.readOnlyRows[index];
  const row = this.rows.at(index) as FormGroup;

  if (this.readOnlyRows[index]) {
    row.disable();
  } else {
    row.enable();
  }

  row.get('ProductValue')?.disable();

}

}
