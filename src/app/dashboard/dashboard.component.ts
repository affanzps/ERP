import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
constructor(private router: Router){

}
navigateToNewStockOpening() {
  this.router.navigate(['/stock-opening/new']);

}
  navigateToStockOpeningList() {
    this.router.navigate(['/stock-opening/new']);

  }
}
