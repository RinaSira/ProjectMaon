
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/uesrs.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})



export class LoginComponent {
  constructor(private UsersService: UsersService) {}
   user = { name: '', password: '' };
    onSubmit(f: NgForm) {
      this.UsersService.FindUser(this.user.password,this.user.name);
  }
}
//export class FetchDataComponent {
//  public myUser;

//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//  }
//}

//export class SimpleFormComp {
//  onSubmit(f: NgForm) {
//    console.log(f.value);  // { first: '', last: '' }
//    console.log(f.valid);  // false
//  }
//}

//interface WeatherForecast {
//  dateFormatted: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}


