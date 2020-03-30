import { GraphicsChartComponent } from './graphics-chart/graphics-chart.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: HeaderComponent,  children: [{
    path: 'bar-chart', component: GraphicsChartComponent}]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
