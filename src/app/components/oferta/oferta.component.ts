import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ofertasService} from '../../services/ofertas.services';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styles: []
})//component

export class OfertaComponent implements OnInit {

  oferta:any = {};


  constructor( private _activatedRoute : ActivatedRoute,
               private _ofertaService : ofertasService
            ) { 

    this._activatedRoute.params.subscribe( params =>{
      
      this.oferta = this._ofertaService.getOferta(params['id']);

    })//activatedRoute

  }//constructor


  ngOnInit(): void {
  }//onInit

}//class
