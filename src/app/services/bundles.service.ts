import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';

import 'rxjs/add/operator/toPromise';

import { Datastore } from './datastore.service';
import { Bundle } from '../models/bundle';

@Injectable()
export class BundlesService {

  constructor(private datastore: Datastore) { }

  getBundles(): Promise<Bundle[]> {
    return this.datastore.findAll(Bundle).toPromise().then(
      (bundles: JsonApiQueryData<Bundle>) => bundles.getModels()
    );
  }
}
