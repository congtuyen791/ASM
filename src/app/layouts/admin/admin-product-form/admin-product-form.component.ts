import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  id: string | undefined;
  product: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    this.productForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      image_url: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      status: new FormControl(1),
      desc: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    
    if (this.id) {
      this.productService.getProduct(this.id).subscribe(data => {
        this.product = data;
        this.productForm.setValue(data);
        console.log(data);
        
      });
    }else{
      this.product = {
        // id: 1,
        name: '',
        desc: '',
        price: 0,
        image_url: '',
        status: 1,
      }
    }
  }
  onSubmit(data: any){
    if (this.id) {
      return this.productService.updateProduct(this.id, data).subscribe((obj) => {
        this.router.navigate(['admin/phones', this.id]);
        alert('Sửa thành công');
      })
    }
    return this.productService.createProduct(data).subscribe((obj) => {
      this.router.navigate(['admin/phones']);
      alert('Thêm mới thành công');
    });
    
    
  }

}
