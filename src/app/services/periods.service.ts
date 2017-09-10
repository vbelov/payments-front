import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';

import 'rxjs/add/operator/toPromise';

import { Datastore } from './datastore.service';
import { Period } from '../models/period';

@Injectable()
export class PeriodsService {

  constructor(private datastore: Datastore) { }

  getPeriods(): Promise<Period[]> {
    return this.datastore.findAll(Period).toPromise().then(
      (periods: JsonApiQueryData<Period>) => periods.getModels()
    );
  }
}
