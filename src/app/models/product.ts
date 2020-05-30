export interface Product {
    //el signo ? significa que es opcional 
    //estos son los campos del documento
    id?: string;
    descripcion?: string;
    fecha?: string;
    imagen?: string;
    lugar?: string;
    nombre?: string;
    precioUnidad?: number;
    titulo?: string; 
}