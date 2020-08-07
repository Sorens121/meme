import { Component, OnInit } from '@angular/core';

import { Queryset } from './Models/querymodel';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  responseData: Observable<any>;
  constructor(private service: AppService){

  }

  ngOnInit(){}

  onSubmit(form: NgForm){
  }
}
