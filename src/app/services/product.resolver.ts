import { Resolve } from '@angular/router'; // Import Resolve interface
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; // Correct the import statement

import { EMPTY, Observable, catchError } from 'rxjs';
import { IProducts } from '../models/products';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProducts> {
  constructor(private productService: ProductsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> {
    const productId = route.params['id']; // Correct the way to access the 'id' parameter
    return this.productService.getProduct(productId).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    );
  }
}
