import { Injectable } from "@angular/core";
import { IProducts } from "./products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})

export class ProductService {
  private productUrl = "api/products/products.json"
  constructor(private http: HttpClient){}
  getProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.productUrl).pipe(
      tap(data => console.log("All" + JSON.stringify(data)))
    );
  }

  }
  
