import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  myForm;
  buttonString: string;
  constructor(public fb:FormBuilder,private ps:ProductService,  public dialogRef: MatDialogRef<ProductFormComponent>)
  {

    this.myForm =  this.fb.group({
        name:['',[Validators.required,Validators.minLength(4)]],
        description:['',[Validators.required,Validators.minLength(20)]],
        type:['Hair'],
        qty:['',[Validators.required]],
        price:['',[Validators.required]],
        cimage: [null,[Validators.required]]
      });

      this.buttonString = "Add Product"
    }




  uploadFile1(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      cimage: file
    });
    this.myForm.get('cimage').updateValueAndValidity()
  }


  ngOnInit(): void {
  }

  addProduct(){
    var formData: any = new FormData();  // multipart form data
    formData.append("name",this.myForm.get('name').value);
    formData.append("description",this.myForm.get('description').value);
    formData.append("price",this.myForm.get('price').value);
    formData.append("qty",this.myForm.get('qty').value);
    formData.append("type",this.myForm.get('type').value);
    formData.append("cimage",this.myForm.get('cimage').value);

    this.ps.addProduct(formData).subscribe(
      () => {alert("Data Submitted");this.dialogRef.close()},
      (response) => {
        console.log(status);
        if(response.status == 200)
         {
          alert("Data Submitted");this.dialogRef.close()
         }
         else
        alert("Error Storing information")}
    )
    }
}
