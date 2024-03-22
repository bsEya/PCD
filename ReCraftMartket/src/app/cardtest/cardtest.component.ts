import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardtest',
  templateUrl: './cardtest.component.html',
  styleUrl: './cardtest.component.css'
})
export class CardtestComponent {
 @Input() product: any; // Input property to receive product data
  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
