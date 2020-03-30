import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsChartComponent } from './graphics-chart.component';

describe('GraphicsChartComponent', () => {
  let component: GraphicsChartComponent;
  let fixture: ComponentFixture<GraphicsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
