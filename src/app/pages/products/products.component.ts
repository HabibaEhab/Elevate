import { Component,inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProduct } from '../../shared/interfaces/iproduct';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [SearchPipe,FormsModule,RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  private readonly productsService = inject(ProductsService);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  
  
  search:string = ""

  products: IProduct[] = [];

  ngOnInit(): void {

    if(isPlatformBrowser(this.pLATFORM_ID)){
      this.getProductsData();
    }
    
   
      
  }



  getProductsData():void{
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.products = res;
      },

      error:(err)=>{
        console.log(err);
      },
    })

  }


 

}
