import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFilterRoutingModule } from './user-filter-routing.module';
import { UserFilterComponent } from './user-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserFilterComponent
  ],
  imports: [
    CommonModule,
    UserFilterRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserFilterModule { }
