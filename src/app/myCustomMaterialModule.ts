import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule],
})
export class MyCustomMaterialModule { }
