import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PeriodsListComponent } from './periods-list/periods-list.component';

import { ProductsService } from './services/products.service';
import { PeriodsService } from './services/periods.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PeriodsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    PeriodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
