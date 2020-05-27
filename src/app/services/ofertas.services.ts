import {Injectable} from '@angular/core'

@Injectable()
export class ofertasService{

    private ofertas : any[] = [
        {
            empresa : "soriana",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "ley",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "walmart",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        {
            empresa : "empresa",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "tienda",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "forum",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "cinemex",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "cinepolis",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "cafe luna",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "paperia",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "rhino",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "bichos",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        },
        
        {
            empresa : "wipiz",
            fecha : "fecha",
            descripcion : "descripcion",
            lugar : "todas las sucursales",
            imagen : "ruta/imagen"
        }
        
    ];//ofertas

    constructor(){}//constructor

    getOferta(){
        return this.ofertas
    }//getOferta

}//class