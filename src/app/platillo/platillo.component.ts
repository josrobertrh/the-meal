import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Router} from '@angular/router';

export interface DialogData {
  "meals":[{"idMeal":"52765","strMeal":"Chicken Enchilada Casserole","strDrinkAlternate":null,"strCategory":"Chicken","strArea":"Mexican","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtuwxu1468233098.jpg"}]
}

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent {

 constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private route: Router) {}
 
 detalle(id:any) {
    this.route.navigate([('detalle/' + id)]);
 }
 
}