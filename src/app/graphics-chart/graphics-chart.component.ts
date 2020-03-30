import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics-chart',
  templateUrl: './graphics-chart.component.html',
  styleUrls: ['./graphics-chart.component.css']
})
export class GraphicsChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['1950', '1970', '1980', '1990', '2010', '2020'];
  public barChartType = 'bar';
  public barChartLegend = true;  
  public barChartData = [
    {data: [5,   7,  25, 25, 28 ,30], label: 'Vegetarians'},
    {data: [2,   1,   4,  7, 10 ,12], label: 'Vegan'},
    {data: [0 ,  0,   0,  0,  6 ,10], label: 'Reducetarians'},
    {data: [93, 92,  71, 68, 56 ,48], label: 'Indifferent'}
  ];

  public doughnutChartLabels = ['Vegetarians', 'Vegan ', 'Reducetarians ', 'Indifferent'];
  public doughnutChartData = [30, 12, 10, 48];
  public doughnutChartType = 'doughnut';

  public pieChartLabels = ['Vegetarians', 'Vegan ', 'Reducetarians ', 'Indifferent'];;
  public pieChartData = [30, 12, 10, 48];
  public pieChartType = 'pie';

  public radarChartLabels = ['Vegetarians', 'Vegan', 'Reducetarians', 'Indifferent'];
  public radarChartData = [
    {data: [5, 2, 0, 93], label: '1950'},
    {data: [30, 12, 10, 48], label: '2020'}
  ];
  public radarChartType = 'radar';
  public pieGraphic = false;
  public barGraphic = true;
  public radarGraphic = false;
  public doughnutGraphic =false;
  constructor() { }

  ngOnInit() {
  }
  public showBar(){
    this.pieGraphic=false;
    this.barGraphic=true;
    this.radarGraphic=false;
    this.doughnutGraphic=false;
  }
  public showPie(){
    this.pieGraphic=true;
    this.barGraphic=false;
    this.radarGraphic=false;
    this.doughnutGraphic=false;
  }
  public showRadar(){
    this.pieGraphic=false;
    this.barGraphic=false;
    this.radarGraphic=true;
    this.doughnutGraphic=false;
  }
  public showDoughnut(){
    this.pieGraphic=false;
    this.barGraphic=false;
    this.radarGraphic=false;
    this.doughnutGraphic=true;
  }

}
