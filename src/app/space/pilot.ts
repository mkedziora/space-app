export class Pilot {
  static defaultUrl = '/assets/default.png';

  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultUrl;
    this.id = attrs.id;
  }

  get fullName(): string {
 const fullName = `${this.firstName} ${this.lastName}`;
return fullName;
  }

  set fullName(value) {
const values = value.split(' ');
this.firstName = values[0];
this.lastName = values[1];
  }
}

export interface PilotAttrs {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}
