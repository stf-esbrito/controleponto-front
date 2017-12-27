import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './add-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddNewComponent
  ],
  exports:[
    AddNewComponent
  ]
})
export class AddNewModule { }
