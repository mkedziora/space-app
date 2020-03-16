import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetectorGameComponent } from './planet-detector-game.component';

describe('PlanetDetectorGameComponent', () => {
  let component: PlanetDetectorGameComponent;
  let fixture: ComponentFixture<PlanetDetectorGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDetectorGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetectorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
