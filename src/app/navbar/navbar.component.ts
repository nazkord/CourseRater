import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  displayLogin: boolean = true;
  userName: string = null;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.getAuthState();
  }

  logout() {
    this.authService.logout();
  }

  getAuthState() {
    this.authService.getAuthState()
      .subscribe(auth => {
        if(!auth) {
          this.displayLogin = true;
        } else {
          this.displayLogin = false;
          this.userName = auth.email;
        }
    });
  }

}
