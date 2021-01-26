import { Injectable } from '@angular/core';

import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsModule } from './products/products.module';

@Injectable({
  providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {


  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}

