import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './components/header/header.component';
import {UsersService} from "./services/users.service";
import {BaseApiService} from "./core/base-api.service";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoaderComponent} from "./components/loader/loader.component";


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    LoaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    NotFoundComponent
  ],
  providers: [UsersService, BaseApiService]
})
export class SharedModule {
}
