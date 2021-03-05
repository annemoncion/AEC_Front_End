import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-line-chart',
  templateUrl: './stats-line-chart.component.html',
  styleUrls: ['./stats-line-chart.component.sass']
})
export class StatsLineChartComponent implements OnInit {

  public mongraphique = {
    type : 'bar',
    legende : true,
    options : { responsive: true, maintainAspectRatio: false }
  };

  public mesdonnees = {
    etiquettes : ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    data : [
      { data: [1124, 3255, 4433, 3232, 987, 333, 4344], label: 'Voyages en Amérique du Sud' },
      { data: [3322, 4344, 5532, 1122, 3089, 978, 345], label: 'Voyages en Europe' },
      { data: [342, 335, 66, 432, 877, 432, 332], label: 'Autres destinations' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
