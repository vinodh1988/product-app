import { ProductFormComponent } from './../../common/product-form/product-form.component';
import { ProductService } from './../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productlist;
type  = 'All';

  constructor(private ps: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.ps.getProducts().subscribe(
        (data: any) => this.productlist = data,
        () => this.productlist = []
      );
  }


  loadDialog(): void{

    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '900px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(() => this.ngOnInit());

}

}
