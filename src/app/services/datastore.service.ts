import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

import { Product } from '../models/product';
import { Period } from '../models/period';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: 'http://localhost:3000/api/v1/',
  models: {
    products: Product,
    'subscription-periods': Period,
  }
})
export class Datastore extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
  }

}
