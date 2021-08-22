import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, LoginUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIService {
  constructor(private http: HttpClient) {}

  signUp(user: IUser): Observable<any> {
    return this.http.post(
      'http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      user
    );
  }

  signIn(user: LoginUser): Observable<any> {
    return this.http.post(
      'http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      user
    );
  }

  fetchProfile(): Observable<any> {
    return this.http.post(
      'http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
      undefined
    );
  }
}
