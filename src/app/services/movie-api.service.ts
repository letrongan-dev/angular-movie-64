import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  fetchMovies = (): Observable<any> => {
    return this.http.get(
      'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim',
      {
        params: {
          maNhom: 'GP01',
        },
      }
    );
  };

  fetchMovie = (movieId: string): Observable<any> => {
    return this.http.get(
      'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim',
      {
        params: {
          MaPhim: movieId,
        },
      }
    );
  };

  constructor(private http: HttpClient) {}
}
