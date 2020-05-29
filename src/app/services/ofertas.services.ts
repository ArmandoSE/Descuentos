import {Injectable} from '@angular/core'

@Injectable()
export class ofertasService{

    private ofertas : any[] = [
        {
            empresa : "soriana",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/aquaman.png"
        },
        
        {
            empresa : "ley",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/batman.png"
        },
        
        {
            empresa : "walmart",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/daredevil.png"
        },
        {
            empresa : "empresa",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/hulk.png"
        },
        
        {
            empresa : "tienda",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/linterna-verde.png"
        },
        
        {
            empresa : "forum",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/spiderman.png"
        },
        
        {
            empresa : "cinemex",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/wolverine.png"
        },
        
        {
            empresa : "cinepolis",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/wolverine.png"
        },
        
        {
            empresa : "cafe luna",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/spiderman.png"
        },
        
        {
            empresa : "paperia",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/linterna-verde.png"
        },
        
        {
            empresa : "rhino",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/hulk.png"
        },
        {
            empresa : "empresaX",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "assets/img/hulk.png"
        }                
        
    ];//ofertas

    constructor(){}//constructor

    getOfertas(){
        return this.ofertas
    }//getOferta

    getOferta(idx : string){
        return this.ofertas[idx]
    }//getOferta

}//class