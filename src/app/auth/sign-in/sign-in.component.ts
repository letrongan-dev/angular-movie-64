import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthAPIService } from 'src/app/services/auth-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  constructor(private authApiSv: AuthAPIService, private authSv: AuthService) {}

  handleSubmit() {
    console.log(this.signinForm.value);
    this.authApiSv.signIn(this.signinForm.value).subscribe(
      (res) => {
        this.authSv.setMe(res.content);
        localStorage.setItem('t', res.content.accessToken);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    // logout()
  }
}
