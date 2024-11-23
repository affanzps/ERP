import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { StockOpeningComponent } from './stock-opening/stock-opening.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEditStockComponent } from './create-stock/create-edit-stock.component';
import { ActivitiesIconComponent } from './activities-icon/activities-icon.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    ReceiptComponent,
    StockOpeningComponent,
    CreateEditStockComponent,
    ActivitiesIconComponent,
    HeaderComponent,
      EditStockComponent,
      DashboardComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
