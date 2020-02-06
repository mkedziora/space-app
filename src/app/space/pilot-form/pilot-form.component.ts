import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { PilotValidators } from '../pilot-validators';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css'],
})
export class PilotFormComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute,  private pilotService: PilotService, private router: Router) { }

  ngOnInit() {
    this.route.data
    .pipe(map((data) => data.pilot))
    .subscribe((pilot) => {
      this.form = new FormGroup({
        id: new FormControl(pilot.id),
        firstName: new FormControl(pilot.firstName, {validators: [Validators.required, PilotValidators.pilotName]}),
        lastName: new FormControl(pilot.lastName, {validators: [Validators.required],
                                                   asyncValidators: [PilotValidators.pilotForbidden],
                                                   updateOn: 'blur'}),
        imageUrl: new FormControl(pilot.imageUrl),
      });
    });
  }

  save() {
    if (this.form.invalid) {
      alert('error');
      return;
    }

    const pilotValue = this.form.value;
    this.pilotService.savePilot(pilotValue).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Nie udało się zapisać pilota!'),
    );
  }
}
