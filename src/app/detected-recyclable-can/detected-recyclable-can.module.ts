import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetectedRecyclableCanContainerComponent } from './detected-recyclable-can.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [DetectedRecyclableCanContainerComponent],
  exports: [DetectedRecyclableCanContainerComponent]
})
export class DetectedRecyclableCanContainerComponentModule {}
