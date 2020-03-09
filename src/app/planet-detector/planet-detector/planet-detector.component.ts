import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent implements OnInit, AfterViewInit {

  @ViewChild('gameElement') gameElement: ElementRef<HTMLDivElement>;
  @ViewChild('horizontalCh') crosshairH: ElementRef<HTMLDivElement>;
  @ViewChild('verticalCh') crosshairV: ElementRef<HTMLDivElement>;
  @ViewChild('planet') planet: ElementRef<HTMLImageElement>;
  constructor() { }

  private dimensions;
  private targetPosition: {
    x: number,
    y: number
  };
  private mousePositionX: number;
  private mousePositionY: number;

  ngOnInit(): void {
    }

  ngAfterViewInit() {
    this.randomPosition();
    // tslint:disable-next-line: max-line-length
    // while (this.targetPosition.x + this.planet.nativeElement.x * 0.3 > this.dimensions.width || this.targetPosition.y + this.planet.nativeElement.y * 0.3 > this.dimensions.height) {
    //   this.randomPosition();
    // }
    this.planet.nativeElement.style.left = this.targetPosition.x + 'px';
    this.planet.nativeElement.style.top = this.targetPosition.y + 'px';
    }

  mouseMoves(x: number, y: number) {
    this.crosshairV.nativeElement.style.left = x + 'px';
    this.crosshairH.nativeElement.style.top = y + 'px';
    this.mousePositionX = x;
    this.mousePositionY = y;
    this.gameElement.nativeElement.style.opacity = (this.distance()/100).toString();
  }
  private randomPosition() {
    this.dimensions = this.gameElement.nativeElement.getBoundingClientRect();
    this.planet.nativeElement.style.left = this.dimensions.x + 'px';
    this.planet.nativeElement.style.top = this.dimensions.y + 'px';
    this.targetPosition = {
      x: Math.floor(Math.random() * this.dimensions.width),
      y: Math.floor(Math.random() * this.dimensions.height)
    };
  }

  private distance() {
    const dx = this.mousePositionX - this.targetPosition.x;
    const dy = this.mousePositionY - this.targetPosition.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
