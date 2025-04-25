import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Dell XPS 15',
      description: '15-inch laptop with Intel i7, 16GB RAM, and 512GB SSD.',
      price: 1499.99,
      image: 'https://picsum.photos/seed/xps15/300/200',
      category: 'Laptops',
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 14"',
      description: 'M2 Pro chip, 16GB unified memory, 1TB SSD.',
      price: 2199.0,
      image: 'https://picsum.photos/seed/macbookpro/300/200',
      category: 'Laptops',
    },
    {
      id: 3,
      name: 'Logitech MX Master 3S',
      description:
        'Wireless mouse with ergonomic design and customizable buttons.',
      price: 99.99,
      image: 'https://picsum.photos/seed/mousemx/300/200',
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'ASUS ROG Strix RTX 4080 GPU',
      description:
        'NVIDIA GeForce RTX 4080, 16GB GDDR6X, high-end gaming performance.',
      price: 1199.99,
      image: 'https://picsum.photos/seed/rtx4080/300/200',
      category: 'Components',
    },
    {
      id: 5,
      name: 'Corsair K95 RGB Platinum',
      description:
        'Mechanical gaming keyboard with RGB lighting and macro keys.',
      price: 159.99,
      image: 'https://picsum.photos/seed/k95rgb/300/200',
      category: 'Accessories',
    },
    {
      id: 6,
      name: 'Samsung 32" 4K Monitor',
      description: 'UHD monitor with IPS panel and HDR support.',
      price: 379.99,
      image: 'https://picsum.photos/seed/samsung4k/300/200',
      category: 'Monitors',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }
}
