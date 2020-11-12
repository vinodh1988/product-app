import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(products: any[], range: string): unknown {
    if (range === 'High Price'){
       return products.filter(x => x.price > 400);
    }
    else  if (range === 'Moderate Price'){
    return products.filter(x => x.price > 200 && x.price < 400);
    }

    else  if (range === 'Low Price'){
      return products.filter(x => x.price <= 250);
      }
    else
     {
         return products;
     }
  }

}
