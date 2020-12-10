import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomFormsModule } from '../app/custom-forms.module';
import { DevComponent } from './dev.component';


@NgModule({
  imports: [
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [DevComponent],
  bootstrap: [DevComponent]
})

export class DevModule { }
