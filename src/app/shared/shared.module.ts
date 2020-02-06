import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickizePipe } from './tickize.pipe';
import { SpaceImageDirective } from './space-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TickizePipe, SpaceImageDirective],
  exports: [TickizePipe, SpaceImageDirective]
})
export class SharedModule { }
