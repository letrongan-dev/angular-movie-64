import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  @ViewChild('addMovieForm') addMovieForm!: NgForm
  file: File | undefined;
   constructor(private http: HttpClient) { }
  
  handleSubmit(){
    const newMovie = {
      ...this.addMovieForm.value, 
      ngayKhoiChieu: dayjs(this.addMovieForm.value.ngayKhoiChieu).format('DD/MM/YYYY'),
      hinhAnh: this.file,
      dangChieu: !!this.addMovieForm.value.dangChieu,
      sapChieu: !!this.addMovieForm.value.sapChieu,
      hot: !!this.addMovieForm.value.hot,
      maNhom: "GP01"
  
  };
  const formData = new FormData;
  for (let key in newMovie) {
    formData.append(key, newMovie[key]);
  }
  this.http.post('http://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',formData).subscribe((res)=>{
    console.log(res);
  }, (err)=>{
    console.log(err);
    
  })
  
   console.log(newMovie);
  }

  



  handleChangeFile(event: any){
    console.log('change',event.target.files[0]);
    this.file = event.target.files[0];
  }


  ngOnInit(): void {
  }

}
