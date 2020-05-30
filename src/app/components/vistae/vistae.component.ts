import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-vistae',
  templateUrl: './vistae.component.html',
  styleUrls: ['./vistae.component.css']
})
export class VistaeComponent implements OnInit {
  product =[];
  //esta unicamente sirve para editar el producto
  editaProduct: Product;
  editando: boolean =false;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
      console.log(products)
      this.product = products;
    })
  }
  borrarProduct(event, product){
    this.productService.deleteProduct(product);
  }
  editProduct(event, product){
 this.editaProduct= product;
 this.editando=!this.editando;
  }

  updateProduct(){
    this.productService.updateProduct(this.editaProduct);
    this.editaProduct = {} as Product;
    this.editando= false;
  }
}
