import { Component, OnInit } from '@angular/core';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserAuthenticated: boolean = false;

  constructor(public authService: HardcodeAuthService) { }

  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.isUserAuthenticated()
  }

}
