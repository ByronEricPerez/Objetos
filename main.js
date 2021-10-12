class producto{
    constructor( codigo , prenda , talle , precio , stock){

        this.codigo = codigo;
        this.prenda = prenda;
        this.talle = talle;
        this.precio = precio;
        this.stock = stock;

    }

    getPrecioFinal(){

        return this.precio + (this.precio * 0.21)
    }

    getStock(){

        if (this.stock > 0){

            return true;
        
        }
        else{

            console.log("No hay stock de " + this.prenda);
            return false;

        }
    }

    ventaProducto(){

        this.stock = this.stock - 1; 
    }


}


let productoUno = new producto( 1 , "Camisa" , "L" , 1200 , 10 );
let productoDos = new producto( 2 , "Musculosa" , "XL" , 850 , 8 );


