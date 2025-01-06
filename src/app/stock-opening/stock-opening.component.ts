import { StockListViewModel,Data } from './../shared/models/stock/StockListViewModel';
import { Component } from '@angular/core';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-stock-opening',
  templateUrl: './stock-opening.component.html',
  styleUrl: './stock-opening.component.scss'
})
export class StockOpeningComponent {
  stockForm:FormGroup;
  stocklist: StockListViewModel = { Data: [], Total: 0 };

  constructor(
    private stockOpeningService:StockOpeningService,
    private router: Router,
    private fb:FormBuilder

  ){
    this.stockForm= this.fb.group({filterKeywords:[''],});
  }

  ngOnInit(): void {
 this.getStockList();
  }


  getStockList(): void {
    const payload = {
      LazyEvent: "{\"filters\":{},\"first\":0,\"rows\":20,\"sortField\":\"GroupBy.Order\",\"sortOrder\":1}"
    };

    this.stockOpeningService.getPagedList(payload).subscribe(
      response => {
        this.stocklist = response;
      },
      error => {
        console.error('Error fetching stock list:', error);
      }
    );
  }


  navigateToStockOpeningList() {
    this.router.navigate(['/stock-opening/new']);

  }
  navigateToStockEdit(id:number) {
    this.router.navigate(['/stock-opening/edit',id]);

  }

  deleteRecord(id: number): void {

    if (confirm('Are you sure you want to delete this record?')) {
      this.stockOpeningService.deleteRecordById(id).subscribe(
        () => {
          console.log(`Record with ID ${id} deleted successfully.`);
          this.getStockList();
        },
        error => {
          console.error('Error deleting record:', error);
        }
      );
    }
  }

  editRecord(id: number) {
    debugger
    this.router.navigate(['/stock-opening/edit', id]);
  }

  onSubmit() {
    const filterValue = this.stockForm.value.filterKeywords;
    console.log('Filter applied:', filterValue);
  }
}
