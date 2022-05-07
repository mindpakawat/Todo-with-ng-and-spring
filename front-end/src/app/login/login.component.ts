import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'smile'
  password = ''
  errorMessage ='username or password is incorrect'
  invalidLogin = false

  constructor(private router: Router, private authService: HardcodeAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['/welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true
    }
  }

}
