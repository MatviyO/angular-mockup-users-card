import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {UsersService} from "./services/users.service";
import {BaseApiService} from "./core/base-api.service";


@NgModule({
  declarations: [
  HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [UsersService,BaseApiService]
})
export class SharedModule {
}
