import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  readonly URl = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(`${this.URl}/${url}`)
  }

}
