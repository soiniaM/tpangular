import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  message = "Invalid Credentials"
  loginFailed = false

  constructor(
    private data: DataService, 
    private titleService: Title,
    private router: Router,
    private authentication: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.data.changeTitle("Sign in")
    this.titleService.setTitle("Login page")
  }

  handleLogin() {

    this.loginFailed = false

    if (this.authentication.login(this.username, this.password))
      this.loginFailed = false;
    else this.loginFailed = true;

    if (this.loginFailed) {
      console.log("Failed !!")
    }
    else {
      console.log("Success !!")
      this.router.navigate(['list'])
    }
  }
}
