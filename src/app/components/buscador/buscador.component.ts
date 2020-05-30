import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ofertasService } from "../../services/ofertas.services";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
}) //component
export class BuscadorComponent implements OnInit {
  ofetas: any[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ofertasService: ofertasService
  ) {} //constructor

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params['termino']);

      this.termino = params['termino']
      this.ofetas = this._ofertasService.buscarOferta(params['termino'])
      console.log(this.ofetas)

    }); //subscribe
  } //ngOnInit
} //class
