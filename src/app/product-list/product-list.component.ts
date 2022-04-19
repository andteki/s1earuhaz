import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
     products: any;  
  // products : Product[] = [
  //   {id: 1, name: "Tej", desc: "Iso 1 l", price: 1.4 },
  //   {id: 2, name: "Vaj", desc: "Iso 100 g", price: 2.5 },
  //   {id: 3, name: "Kenyér", desc: "fehér 1 kg", price: 1.6 }
  // ];
  name : string = '';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  toCart(product: Product) {
    console.log(product.name);
    console.log(this.name);
  }

  getProducts() {
    this.api.getProducts().subscribe({
      next: res => {
        console.log(res);
        this.products = res;
      }
    });
  }

}

interface Product {
  id: number,
  name: string,
  desc: string,
  price: number
}
