import { Component, OnInit } from '@angular/core';
import { AuthAPIService } from './services/auth-api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-project';

  constructor(private authApiSv: AuthAPIService, private authSv: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem('t')) {
      this.authApiSv.fetchProfile().subscribe(
        (res) => {
          this.authSv.setMe(res.content);
        },
        (err) => {}
      );
    }
  }
}
