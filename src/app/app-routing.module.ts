import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';
import { StockOpeningComponent } from './stock-opening/stock-opening.component';
import { CreateEditStockComponent } from './create-stock/create-edit-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: 'receipt', component: ReceiptComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'stock-opening/list', component: StockOpeningComponent },
  { path: 'stock-opening/edit/:id', component: CreateEditStockComponent},
  { path: 'stock-opening/new', component: CreateEditStockComponent},

  //{ path: 'stock-opening/edit/:id', component: EditStockComponent},
  { path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
