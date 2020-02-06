import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Pilot, PilotAttrs } from './pilot';

@Injectable({
  providedIn: 'root',
})
export class PilotService {

  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
      map((data) => data.map((attrs) => new Pilot(attrs))),
    );
  }
  getPilot(id: number): Observable<Pilot> {
    return this.http.get<PilotAttrs>(`${environment.apiUrl}/pilots/${id}`).pipe(
      map((data) => new Pilot(data)),
    );
  }
  savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    if (pilotAttrs.id) {
      return this.updatePilot(pilotAttrs);
    } else {
      return this.createPilot(pilotAttrs);
    }
  }
  updatePilot(attrs: PilotAttrs): Observable<Pilot> {
    return this.http.put<PilotAttrs>(`${environment.apiUrl}/pilots/${attrs.id}`, attrs).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs)));
  }
  createPilot(attrs: PilotAttrs) {
    return this.http.post<PilotAttrs>(`${environment.apiUrl}/pilots`, attrs).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs)));
  }
}
