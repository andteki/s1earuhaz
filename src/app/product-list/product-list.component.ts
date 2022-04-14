import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products : Product[] = [
    {id: 1, name: "Tej", desc: "Iso 1 l", price: 1.4 },
    {id: 2, name: "Vaj", desc: "Iso 100 g", price: 2.5 },
    {id: 3, name: "Kenyér", desc: "fehér 1 kg", price: 1.6 }
  ];
  name : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  toCart(product: Product) {
    console.log(product.name);
    console.log(this.name);
  }

}

interface Product {
  id: number,
  name: string,
  desc: string,
  price: number
}
