import { Component, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ProfileModel} from './profile.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: ProfileModel = {
   name: "Jose Roberto",
   lastname: "Rodriguez",
   image: " "
  };

  constructor() { }

  ngOnInit(): void {
  }

}
