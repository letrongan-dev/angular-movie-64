import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authSv: AuthService) {}

  loggedInUser: IUser | null = null;

  ngOnInit(): void {
    this.authSv.me.subscribe((val: IUser | null) => {
      this.loggedInUser = val;
    });
  }
}
