import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthService {

  constructor() { }

  authenticate(username: string, password: string) {
    // console.log('before ' + this.isUserAuthenticated())
    if (username === 'smile' && password === '1234') {
      // console.log('after ' + this.isUserAuthenticated())
      sessionStorage.setItem('authenticateUser', username)
      return true
    } else {
      return false
    }
  }

  getUsername() {
    return sessionStorage.getItem('authenticateUser')
  }

  isUserAuthenticated() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser')
  }
}
