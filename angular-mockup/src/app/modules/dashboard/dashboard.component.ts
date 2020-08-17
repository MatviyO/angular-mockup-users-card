import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "../../shared/models/user";
import {UsersService} from "../../shared/services/users.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  users: IUser[] = [];
  isLoading = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.subscription = this.usersService.getUsers().subscribe((users: Object) => {
        this.users = users["data"]
        this.isLoading = true;
      })
    }, 1000)

  }

  changePage(page: number) {
    this.usersService.getUsers(page).subscribe((users: Object) => {
      this.users = users["data"]
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}





