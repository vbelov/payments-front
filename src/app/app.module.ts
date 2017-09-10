import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PeriodsListComponent } from './periods-list/periods-list.component';
import { BundlesListComponent } from './bundles-list/bundles-list.component';

import { ProductsService } from './services/products.service';
import { PeriodsService } from './services/periods.service';
import { BundlesService } from './services/bundles.service';
import { Datastore } from './services/datastore.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PeriodsListComponent,
    BundlesListComponent,
  ],
  imports: [
    BrowserModule,
    JsonApiModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    PeriodsService,
    BundlesService,
    Datastore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
