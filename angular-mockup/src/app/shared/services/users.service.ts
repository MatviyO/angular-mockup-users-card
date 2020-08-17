import { Injectable } from '@angular/core';
import {BaseApiService} from "../core/base-api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private baseApiService: BaseApiService) { }
  getUsers(page: number = 1) {
    return this.baseApiService.get(`users?page=${page}`);
  }
}
