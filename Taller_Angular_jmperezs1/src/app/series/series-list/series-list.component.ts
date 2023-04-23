import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  seriesL: Array<Series> = [];

  promedio: number=1;

  constructor(private seriesService: SeriesService) { }

  getSeries():void{
    this.seriesService.getSeries().subscribe(series=>{
      this.seriesL=series;
    })
  }

  getPromedio(): void{
    let suma: number = 0;
    this.seriesService.getSeries().subscribe(series=>{
      series.forEach(serie => suma=suma+serie.seasons);
      this.promedio=suma/series.length;
    });

  }




  ngOnInit() {
    this.getSeries();
    this.getPromedio();
  }

}
