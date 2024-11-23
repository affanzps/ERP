import { StockListViewModel } from './../shared/models/stock/StockListViewModel';
import { Component } from '@angular/core';
import { StockOpeningService } from '../shared/services/stockOpening/stock-opening.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-stock-opening',
  templateUrl: './stock-opening.component.html',
  styleUrl: './stock-opening.component.scss'
})
export class StockOpeningComponent {
  stocklist:StockListViewModel = new StockListViewModel();

  constructor(private stockOpeningService:StockOpeningService,
    private router: Router // Inject Router for navigation

  ){}

  ngOnInit(): void {
 this.getStockList();
  }


  getStockList(): void {
    const payload = {
      LazyEvent: "{\"filters\":{},\"first\":0,\"rows\":20,\"sortField\":\"GroupBy.Order\",\"sortOrder\":1}"
    };

    this.stockOpeningService.getPagedList(payload).subscribe(
      response => {
        console.log(response);
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

  onHover(item: any) {
    item.isHovered = true; // Set isHovered to true when hovering over the row
  }
  onLeave(item: any) {
    item.isHovered = false; // Set isHovered to false when mouse leaves the row
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
    this.router.navigate(['/stock-opening/edit', id]); // Navigate to the edit page with the ID as a parameter
  }
}
