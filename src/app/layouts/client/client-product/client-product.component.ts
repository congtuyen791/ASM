import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {

  product: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.productService.getProducts2().subscribe((data) => {
      this.product = data;
      console.log(data);
      
    })
  }
  onLoc(){
    this.productService.getProducts2L().subscribe((data) => {
      this.product = data;
      console.log(data);
      
    })
  }

}
