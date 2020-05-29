import { Component, OnInit } from '@angular/core';
import {ofertasService} from '../../services/ofertas.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: []
})//component

export class OfertasComponent implements OnInit {

  oferta:any[] = [];

  constructor( private _ofertasServices : ofertasService ,
               private _router : Router
              ) { }//constructor

  ngOnInit(): void {

    this.oferta = this._ofertasServices.getOfertas();

  }//ngOnInit


  mostrarOferta(id:number){

    this._router.navigate(['/oferta',id])

  }//mostraOfertas

}//class
