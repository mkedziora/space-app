import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-detector-game',
  templateUrl: './planet-detector-game.component.html',
  styleUrls: ['./planet-detector-game.component.css'],
})
export class PlanetDetectorGameComponent implements OnInit, AfterViewInit {

  @ViewChild('gameElement') gameElement: ElementRef<HTMLDivElement>;
  @ViewChild('horizontalCh') crosshairH: ElementRef<HTMLDivElement>;
  @ViewChild('verticalCh') crosshairV: ElementRef<HTMLDivElement>;
  @ViewChild('planet') planet: ElementRef<HTMLImageElement>;
  constructor(private router: Router) { }

  private dimensions;
  private targetPosition: {
    x: number,
    y: number,
  };
  private mousePositionX: number;
  private mousePositionY: number;

  ngOnInit(): void {
    }

  ngAfterViewInit() {
    this.randomPosition();
    // tslint:disable-next-line: max-line-length
    while (this.targetPosition.x + this.planet.nativeElement.width > this.dimensions.width || this.targetPosition.y + this.planet.nativeElement.height > this.dimensions.height) {
    this.randomPosition();
    }
    this.planet.nativeElement.style.left = this.targetPosition.x + 'px';
    this.planet.nativeElement.style.top = this.targetPosition.y + 'px';
    }

  mouseMoves(x: number, y: number) {
    if (x > 5 && y > 5) {
      this.crosshairV.nativeElement.style.left = x + 'px';
      this.crosshairH.nativeElement.style.top = y + 'px';
      this.mousePositionX = x;
      this.mousePositionY = y;
      if (this.distance() / 100 < 1) {
        this.gameElement.nativeElement.style.opacity = (this.distance() / 100).toString();
        this.planet.nativeElement.style.opacity = '1';
      } else {
        this.gameElement.nativeElement.style.opacity = '1';
        this.planet.nativeElement.style.opacity = '0';
      }
    }
  }

  clicked() {
    if (this.distance() < 20) {
    this.router.navigate(['planetdetector/endgame']);
    }
  }

  private randomPosition() {
    this.dimensions = this.gameElement.nativeElement.getBoundingClientRect();
    this.planet.nativeElement.style.left = this.dimensions.x + 'px';
    this.planet.nativeElement.style.top = this.dimensions.y + 'px';
    this.targetPosition = {
      x: Math.floor(Math.random() * this.dimensions.width),
      y: Math.floor(Math.random() * this.dimensions.height),
    };
  }

  private distance() {
    const dx = this.mousePositionX - (this.targetPosition.x + this.planet.nativeElement.width / 2);
    const dy = this.mousePositionY - (this.targetPosition.y + this.planet.nativeElement.height / 2);
    return Math.sqrt(dx * dx + dy * dy);
  }
}
