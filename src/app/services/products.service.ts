import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Product } from '../models/product';

interface JsonApiObject {
  attributes: Product;
}

interface JsonApiList {
  data: JsonApiObject[];
}

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.http.get<JsonApiList>('http://localhost:3000/api/v1/products')
      .toPromise()
      .then(response => response.data.map(obj => obj.attributes));
      // .catch(this.handleError);
  }
}
