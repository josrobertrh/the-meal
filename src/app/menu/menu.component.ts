import { Component, OnInit } from '@angular/core';
import { MenuService } from "./services/menu.service";
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlatilloComponent } from '../platillo/platillo.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  platillos: any;
  platillo: any;
  url: string = '';
  urlC: string = '';
    

  constructor(public menuService: MenuService,public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Entro a el metodo de carga');
    this.url = '/api/json/v1/1/search.php?f=a'; 
    this.menuService.getPlatillos(this.url).subscribe(data => {
      console.log(data);
      this.platillos = data;
    });
    this.openDialogRamdom();
  }
  
  openDialog(id:any) {
   this.urlC = '/api/json/v1/1/lookup.php?i='+id; 
    this.menuService.getPlatillo(this.urlC).subscribe(data => {
      console.log(data);
      const dialogRef = this.dialog.open(PlatilloComponent,{
      data:data,
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      
    });
    
  }
  openDialogRamdom() {
   this.urlC = '/api/json/v1/1/random.php'; 
    this.menuService.getPlatillo(this.urlC).subscribe(data => {
      console.log(data);
      const dialogRef = this.dialog.open(PlatilloComponent,{
      data:data,
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      
    });
    
  }

}
