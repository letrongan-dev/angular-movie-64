import { AddMovieComponent } from './../add-movie/add-movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'detail/:id', component: DetailIndexComponent },
  { path: 'signin', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'add-movie', component: AddMovieComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class RoutingModule { }
