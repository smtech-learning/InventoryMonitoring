import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li><a routerLink="Orders">Orders</a>
   </li>
   <li><a routerLink="Inventory">Inventory</a>
   </li>
   <li><a routerLink="Suppliers">Suppliers</a>
   </li>
   <li><a routerLink="Ratings">Ratings</a>
   </li>
</ul>
  <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
