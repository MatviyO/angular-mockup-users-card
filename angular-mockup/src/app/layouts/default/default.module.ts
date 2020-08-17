import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

import {DashboardModule} from "../../modules/dashboard/dashboard.module";
import {DefaultComponent} from "./default.component";

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DashboardModule
  ],
  providers: []

})
export class DefaultModule { }
