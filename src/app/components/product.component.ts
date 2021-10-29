import { Component, Input, Output, EventEmitter, OnChanges,  SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit,  OnDestroy{

    itemList: string;
    @Input() productos: Product[];
    @Input() producto: Product;
    @Output() productoClicked: EventEmitter<Product> = new EventEmitter();

    constructor(){
        console.log('1. Constructor');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('2. ngOnChanges');
        console.log(changes);
    }
    ngOnInit(){
        console.log('3. init');
    }

    ngOnDestroy(){
        console.log('5. onDestroy');
    }

    agregarCarrito(producto){
        this.productoClicked.emit(producto);
    }

}
