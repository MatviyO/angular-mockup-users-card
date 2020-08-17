import {Component, OnInit} from '@angular/core';
import {IUser} from "../../shared/models/user";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: IUser[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: Object) => {
      this.users = users["data"]
    })
  }
  changePage(page: number) {
    this.usersService.getUsers(page).subscribe((users: Object) => {
      this.users = users["data"]
    })
  }
}





