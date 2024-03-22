import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardtestComponent } from './cardtest/cardtest.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReCraftMartket';
  //products = [
    //{ name: 'Product 1', description: 'Description of Product 1', likes: 10 },
    //{ name: 'Product 2', description: 'Description of Product 2', likes: 20 },
    // Add more products as needed
 // ];
constructor(private router:Router){}
go(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}
