import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  me = new BehaviorSubject<IUser | null>(null);

  setMe(value: IUser) {
    this.me.next(value);
  }
  constructor() {}
}
