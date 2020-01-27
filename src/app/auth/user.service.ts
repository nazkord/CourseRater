import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  isAdmin() : boolean {
    if(this.authService.getCurrentUser() && this.authService.getCurrentUser().email === 'admin@agh.edu.pl') {
      return true;
    } else {
      return false;
    }
  }
}
