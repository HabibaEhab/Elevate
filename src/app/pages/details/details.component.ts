import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../shared/interfaces/iproduct';



@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

 private readonly activatedRoute = inject(ActivatedRoute);
 private readonly productsService = inject(ProductsService);
 
 

 productId:any;
 productDetails: IProduct  | null = null;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.productId = res.get("id");
        console.log(this.productId);
        console.log(res)

        this.productsService.getSpecificProduct(this.productId).subscribe({
          next:(res)=>{
            this.productDetails = res;

          },
          error:(err)=>{
            console.log(err);

          }
        })

      },
      error:(err)=>{
        console.log(err);

      }
    })
      
  }

 

}
