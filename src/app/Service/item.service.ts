import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  //  private apiUrl= "http://localhost:3000/api/products";
  // private postUrl = 'http://localhost:3000/api/product';
  private postUrl= 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    // return this.http.get(this.postUrl);
    return this.http.get(`${this.postUrl}/get/product`);
  }
  createProducts(product: any) {
    // return this.http.post(this.postUrl, product);
    return this.http.post(`${this.postUrl}/create`, product);
  }

  updateProduct(id: any, product: any) {
    // return this.http.put(`${this.postUrl}/${id}`, product);
    // return this.http.put(`${this.postUrl}/update/${id}`, product);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.postUrl}/update/${id}`, product, { headers });
  }

  deleteProduct(id: string) {
    // return this.http.delete(`${this.postUrl}/${id}`);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(`${this.postUrl}/delete/product?id=${id}`, { headers });

  }

  getProductById(id: string) {
    // return this.http.get(`${this.postUrl}/${id}`);
    return this.http.get(`${this.postUrl}/get/product/${id}`);
  }
}
