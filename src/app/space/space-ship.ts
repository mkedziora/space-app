import { Pilot } from './pilot';

export class SpaceShip {
  modelName: string;
  imageUrl: string;
  health: number;
  activeShields = true;
  activeWeapons = true;
  pilot: Pilot;

  constructor(modelName: string, imageUrl: string, pilot: Pilot) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
}
