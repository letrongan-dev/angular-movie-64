import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAPIService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;
  constructor(private authApiSv: AuthAPIService, private router: Router) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.signupForm.invalid) return;
    const newUser = { ...this.signupForm.value, maNhom: 'GP01' };
    this.authApiSv.signUp(newUser).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/signin']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
