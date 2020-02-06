import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  selectedPilot: Pilot = null;
  pilots: Pilot[];

  @Output() selected = new EventEmitter<Pilot>();

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('Fail :C')
    });
  }
  select(pilot: Pilot): void {
this.selectedPilot = pilot;
this.selected.emit(pilot);
  }
  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }
  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }
}
