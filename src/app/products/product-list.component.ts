import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { ProductService } from './product.service';

@Component({
    templateUrl:"./product-list.component.html",
    styleUrls:["./product-list.component.css"],
})
export class ProductListComponent implements OnInit{
  pageTitle : string ='Product List'; 
  showImage: boolean = false;
  _listFilter: string;
  get listFilter():string{
     return this._listFilter;
  }
  set listFilter(value: string){
     this._listFilter = value;
     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
  }
  filteredProducts: IProducts[];
  products: IProducts[] =[];
  //setting default values to the filterBy
  constructor(private productService: ProductService){
    
  
  }
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProducts[]{
   filterBy = filterBy.toLocaleLowerCase();
   return this.products.filter((products: IProducts)=>
    products.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
  }
  clickRating(message: string): void {
    this.pageTitle = "Product List: " +message
  }
  ngOnInit():void{
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.filteredProducts = this.products;
      }
    );
    
  }
}