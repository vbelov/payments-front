import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Period } from '../models/period';

interface JsonApiObject {
  attributes: Period;
}

interface JsonApiList {
  data: JsonApiObject[];
}

@Injectable()
export class PeriodsService {

  constructor(private http: HttpClient) { }

  getPeriods(): Promise<Period[]> {
    return this.http.get<JsonApiList>('http://localhost:3000/api/v1/subscription-periods')
      .toPromise()
      .then(response => response.data.map(obj => obj.attributes));
    // .catch(this.handleError);
  }
}
