import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private localStorageKey = 'products';

  getProducts(): any[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  addProduct(product: any): void {
    const products = this.getProducts();
    let maxid=0;
    products.forEach(r =>{if (maxid<r.id)  maxid=r.id});
    product.id=maxid+1;
    products.push(product);
    localStorage.setItem(this.localStorageKey, JSON.stringify(products));
  }

  updateProduct(proudct:any): void {
    const products = this.getProducts();

    const index = products.findIndex((p: any) => p.id === proudct.id);
    if (index !== -1) {
      products[index] = proudct;
      localStorage.setItem(this.localStorageKey, JSON.stringify(products));
    }
  }

  deleteProduct(id: number): void {
    const products = this.getProducts().filter((p: any) => p.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(products));
  }

  getProductById(id: number): any {
    return this.getProducts().find((p: any) => p.id === id);
  }
}
