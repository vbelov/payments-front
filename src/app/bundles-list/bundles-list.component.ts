import { Component, OnInit } from '@angular/core';
import { Bundle } from '../models/bundle';
import { BundlesService } from '../services/bundles.service';

@Component({
  selector: 'app-bundles-list',
  templateUrl: './bundles-list.component.html',
  styleUrls: ['./bundles-list.component.css']
})
export class BundlesListComponent implements OnInit {
  bundles: Bundle[];

  constructor(
    private bundlesService: BundlesService
  ) { }

  ngOnInit() {
    this.bundlesService.getBundles()
      .then(bundles => this.bundles = bundles);
  }

}
