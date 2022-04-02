import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DetalleService } from "./services/detalle.service";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id: string = '';
  public url: string = '';
  public platilloDetalle: any;

  constructor(public detalleService: DetalleService,private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.url = '/api/json/v1/1/lookup.php?i='+this.id; 
    console.log(this.url)
    this.detalleService.getPlatilloDetalle(this.url).subscribe(data => {
      console.log(data);
      this.platilloDetalle = data;
    });
    
  }

}
