import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProducts[];
  productsSubscription: Subscription;

  constructor(private ProductsService: ProductsService) {}

  ngOnInit():void{
    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(){
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
  }


}
