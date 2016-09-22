import {Component} from '@angular/core';
import {Observable} from 'rxjs/rx';
import {Http} from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
selector: 'app-supplier',
template:`
<input type="text" (input)="search($event.target.value)">

<ul>
      <li *ngFor="let supplier of suppliers | async">{{supplier.name}}  - {{supplier.address.street}}</li>

    </ul> 

    <ul>
      <li> {{address}} </li>
      
    </ul>
    
`

})
export class SuppliersComponent{

suppliers: Observable<Array<any>>;
address: Observable<Array<any>>;
urladdress:string;
  constructor (private _http: Http) {
   this.suppliers = this._http.get('https://jsonplaceholder.typicode.com/users/')
                      .map(response => response.json());
  }
search(searchtext){
    if(searchtext.length<5)
    return;
console.log(searchtext);

this.urladdress = 'https://maps.googleapis.com/maps/api/geocode/json?address='+searchtext;
console.log(this.urladdress);
   this._http.get(this.urladdress)
                        .map(response => response.json())
                        .debounceTime(3000000)
                        .subscribe(
                            (data)=>{this.address=data.results[0].formatted_address},
                            (err)=>{console.log(err)} 
                        )

                   
                        
}

}