import { Injectable } from '@angular/core';
import {JsonApiQueryData} from 'angular2-jsonapi';

import 'rxjs/add/operator/toPromise';

import { Datastore } from './datastore.service';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

  constructor(private datastore: Datastore) { }

  getProducts(): Promise<Product[]> {
    return this.datastore.findAll(Product).toPromise().then(
      (products: JsonApiQueryData<Product>) => products.getModels()
    );
  }
}
