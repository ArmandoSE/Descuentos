import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //es la coleccion o bd
  productsCollection: AngularFirestoreCollection<Product>;
  //es el producto en si
  products: Observable<Product[]>;
  //es el documento
  productDoc:AngularFirestoreDocument<Product>;

  constructor(public db:AngularFirestore) {
    //this.products = this.db.collection('products').valueChanges();
    this.productsCollection = this.db.collection('products');
    this.products = this.productsCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data =a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getProducts(){
     return this.products;
   }
   addProduct(product: Product){
    this.productsCollection.add(product);
   }
   deleteProduct(product: Product){
     //esta funcion busca el id del producto en documento
    this.productDoc= this.db.doc(`products/${product.id}`);
    this.productDoc.delete();
   }

   updateProduct(product: Product){
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.update(product);
   }


  }
