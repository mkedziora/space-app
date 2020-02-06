import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { PilotValidators } from './pilot-validators';

fdescribe('PilotValidators', () => {
  let form: FormControl;
  beforeEach(() => {
    form = new FormControl(null);
  });
  describe('pilotName', () => {
    it('should return null', () => {
      form = new FormControl(null);
      expect(PilotValidators.pilotName(form)).toBeNull();
    });
    it('should return null', () => {
      form = new FormControl('Monster');
      expect(PilotValidators.pilotName(form)).toBeNull();
    });
    it('should return true', () => {
      form = new FormControl('monster');
      expect(PilotValidators.pilotName(form)).toEqual({pilotName: true});
    });
  });
  describe('pilotForbbiden', () => {
    it('should return null', () => {
      form = new FormControl(null);
      expect(PilotValidators.pilotForbidden(form).subscribe((result) => expect(result).toBeNull()));
    });
    it('should return null', () => {
      form = new FormControl('Ciapciak');
      spyOn(ajax, 'getJSON').and.returnValue(of([{name: 'Ciapciak'}]));
      expect(PilotValidators.pilotForbidden(form).subscribe((result) => expect(result).toEqual({pilotForbidden: true})));
    });
    it('should return null', () => {
      form = new FormControl('Pepe');
      spyOn(ajax, 'getJSON').and.returnValue(of([]));
      PilotValidators.pilotForbidden(form)
      .subscribe((result) => expect(result).toBeNull());
    });
  });
});
