import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { PeriodsListComponent } from './periods-list/periods-list.component';
import { BundlesListComponent } from './bundles-list/bundles-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductsListComponent },
  { path: 'periods',   component: PeriodsListComponent },
  { path: 'bundles',   component: BundlesListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
