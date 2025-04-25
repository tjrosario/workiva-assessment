import { Component, Input, Output, EventEmitter, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input({ transform: booleanAttribute }) readOnly: boolean = false;
  @Output() selected = new EventEmitter<number>();

  viewDetails(): void {
    this.selected.emit(this.product.id);
  }
}
