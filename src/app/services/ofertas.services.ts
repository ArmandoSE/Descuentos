import {Injectable} from '@angular/core'


@Injectable()
export class ofertasService{

    private ofertas : Oferta[] = [
        {
            empresa : "soriana",
            fecha : "27 de mayo al 30 de mayo",
            titulo : "2x3 en aceite oliva",
            lugar : "sucursar insurgentes",
            imagen : "assets/img/aceite.png",
            descripcion : "2x3 en todos los aceites de oliva de cualquier marca, oferta validad hasta el 30 de mayo"
        },
        
        {
            empresa : "ley",
            fecha : "5 de mayo al 10 de mayo",
            titulo : "chocolates 3x2",
            lugar : "sucursal alica",
            imagen : "assets/img/batman.png",
            descripcion : "3x2 en todos los chocolatde de todas las marcas"
        },
        
        {
            empresa : "walmart",
            fecha : "20 de diciembre al 28 de diciembre",
            titulo : "vinos al 50%",
            lugar : "sucursal insurgentes",
            imagen : "assets/img/daredevil.png",
            descripcion : "Todos los vinos de la marca VINO al 50% de descuento"
        },
        {
            empresa : "desechables friendly",
            fecha : "28 de diciembre al 6 de enero",
            titulo : "todo al 50%",
            lugar : "sucursal enfrente de la normal superior",
            imagen : "assets/img/hulk.png",
            descripcion : "Todos los productos de la tienda se encuentran al 50% de descuento"
        },
        
        {
            empresa : "plasticos north",
            fecha : "5 de mayo al 10 de mayo",
            titulo : "2x1 en todos los desechables",
            lugar : "sucursal xalisco",
            imagen : "assets/img/linterna-verde.png",
            descripcion : "Todos los desechables de cualquier marca al 2x1"
        }
        
    ];//ofertas

    constructor(){}//constructor

    getOfertas(){
        return this.ofertas
    }//getOferta

    getOferta(idx : string){
        return this.ofertas[idx]
    }//getOferta

    buscarOferta(termino:string){
  
        let ofertaArr : Oferta[] = [];
        termino = termino.toLowerCase();

        for(let ofertaTmp of this.ofertas){

            let tituloTmp = ofertaTmp.titulo.toLowerCase();
            if(tituloTmp.indexOf(termino)>=0){
                ofertaArr.push(ofertaTmp)
            }//if
            
        }//for

        return ofertaArr

    }//buscarOferta

    
}//class


export interface Oferta{

    empresa : string,
    fecha : string,
    titulo : string,
    lugar : string,
    imagen : string,
    descripcion : string

};//interface