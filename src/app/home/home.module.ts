import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeIndexComponent, MovieComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [HomeIndexComponent],
})
export class HomeModule {}
