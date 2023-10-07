import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(private ProductsService: ProductsService ) {}


  basket: IProducts[];
  basketSubscription :Subscription;


  ngOnInit():void{
    this.basketSubscription = this.ProductsService.getProductFromBasket().subscribe((data) =>{
      this.basket = data;
    });
  }

  ngOnDestroy(){
    if(this.basketSubscription) this.basketSubscription.unsubscribe();
  
}

minusItemFromBasket(item: IProducts){
  if(item.quantity == 1){
    this.ProductsService.deleteProductFromBasket(item.id).subscribe((data)=>{
      let index = this.basket.findIndex((data) => data.id === item.id)
      this.basket.splice(index, 1);
    });
  }else{
    item.quantity --;
    this.ProductsService.updateProductToBasket(item).subscribe((data)=>{
  
    });
  }
}

plusItemFromBasket(item: IProducts){
  item.quantity ++;
  this.ProductsService.updateProductToBasket(item).subscribe((data)=>{

  });
}

}
