import { Component, Inject, LOCALE_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  products = ["Shirt", "Shoe", "Jacket"];
  filteredProducts = this.products;
  gender = '';

  search(value: string) {
    this.filteredProducts = this.products.filter(p => p.includes(value));
  }

  switchLang() {
    location.href = this.locale === 'es' ? '/en-US' : '/es';
  }
}
