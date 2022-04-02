import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-meal';
  
constructor( 
    private _auth: AuthService, 
    private router: Router,
    private toastr: ToastrService
  ) { } 
  
  logout() {
    this._auth.clearStorage();
    this.router.navigate(['login']);
  }
  
  isLoggedIn() {
    if (this._auth.getToken() == null) {
      return false;
    }else {
      return true;
    }
    }
  }
