import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestMenuComponent } from './test-menu.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [TestMenuComponent],
  exports: [TestMenuComponent]
})
export class TestMenuComponentModule {}
