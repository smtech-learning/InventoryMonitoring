import {Component} from '@angular/core';
import {OrderService} from './app.order.service';

@Component({
  selector:'app-order',
  template:`
  <h1> Order Component</h1>
  <input type="text" id="searchTerm"/>
  `,
  providers:[OrderService]
})
export class OrderComponent{


}
