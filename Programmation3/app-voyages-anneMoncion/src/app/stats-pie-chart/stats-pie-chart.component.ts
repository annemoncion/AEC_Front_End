import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-stats-pie-chart',
  templateUrl: './stats-pie-chart.component.html',
  styleUrls: ['./stats-pie-chart.component.sass']
})
export class StatsPieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Très', 'satisfaits'], ['Satisfaits'], 'Insatisfaits'];
  public pieChartData: SingleDataSet = [600, 230, 72];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
