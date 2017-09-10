import { Component, OnInit } from '@angular/core';
import { Period } from '../models/period';
import { PeriodsService } from '../services/periods.service';

@Component({
  selector: 'app-periods-list',
  templateUrl: './periods-list.component.html',
  styleUrls: ['./periods-list.component.css']
})
export class PeriodsListComponent implements OnInit {
  periods: Period[];

  constructor(
    private periodsService: PeriodsService
  ) { }

  ngOnInit() {
    this.periodsService.getPeriods()
      .then(periods => this.periods = periods);
  }
}
