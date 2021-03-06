import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

import {DashboardComponent} from "../../modules/dashboard/dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: []

})
export class DashboardModule { }
