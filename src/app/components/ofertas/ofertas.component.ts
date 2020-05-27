import { Component, OnInit } from '@angular/core';
import {ofertasService} from '../../services/ofertas.services';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: []
})//component

export class OfertasComponent implements OnInit {

  oferta:any[] = [];

  constructor( private _ofertasServices : ofertasService ) { }//constructor

  ngOnInit(): void {

    this.oferta = this._ofertasServices.getOferta();

  }//ngOnInit

}//class
