import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  nombre:string;

  constructor(){
    console.log('Constructor');
    this.nombre= 'LUis1';
  }
  product:Product;

  nombres:string[] = ['Luis', 'Juan', 'Pedro', 'Carlos', 'Samuel'];
  products:Product[] = [
    {
      id: '1',
      image: 'assets/imagenes/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/imagenes/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'cambio'
    },
    {
      id: '3',
      image: 'assets/imagenes/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/imagenes/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/imagenes/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/imagenes/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  onClick(){
    this.nombres.push(this.nombre);
  }

  deleteItem(index:number){
    this.nombres.splice(index, 1);
  }

  productoRecibido(producto1){
    console.log("El producto que recibo fue con el id: " + producto1.id)
  }
}
