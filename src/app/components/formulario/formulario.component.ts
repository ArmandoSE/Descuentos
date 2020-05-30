import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 product = {} as Product
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  //metodo para añadir producto
  addProduct(){
    console.log(this.product)
    this.productService.addProduct(this.product);
    this.product = {} as Product;
  }

}
