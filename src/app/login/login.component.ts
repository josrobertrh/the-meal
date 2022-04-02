import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import { ToastrService } from 'ngx-toastr';
 
@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
}) 
export class LoginComponent implements OnInit { 
 public form: FormGroup = this.fb.group({});
  constructor( 
    private _auth: AuthService, 
    private router: Router, 
    public fb: FormBuilder ,
    private toastr: ToastrService
  ) { } 
 
  ngOnInit(): void { 
    this.form = this.fb.group({ 
      username: ['', Validators.required], 
      password:['', Validators.required] 
    }); 
  } 
 
  login(){ 
     let b = this.form.value 
     let user = this.form.get('username')!.value;
     let password = this.form.get('password')!.value;
     if(user != null && password != null){
        if(user == 'user' && password == 'root'){ 
        this._auth.setDataInLocalStorage('token', '7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ' ) 
        this.router.navigate(['']) 
      } 
     }else{
       this.toastr.warning('Hello world!', 'Toastr fun!');
     }
  } 
}