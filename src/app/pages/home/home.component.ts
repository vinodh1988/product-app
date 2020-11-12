import { ProductService } from './../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productlist;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
      this.ps.getProducts().subscribe(
        (data: any) => this.productlist = data,
        () => this.productlist = []
      );
  }

}
