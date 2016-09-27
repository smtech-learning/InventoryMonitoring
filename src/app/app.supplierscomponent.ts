import {Component} from '@angular/core';
import {Observable} from 'rxjs/rx';
import {Http} from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {FilterPipe} from './app.supplier.pipe.ts'

var template = `
<input type="text" (input)="search($event.target.value)">
<input type="text" [(ngModel)]="term" value="s">

<ul>
      <li *ngFor="let supplier of suppliers | async|filter:term let i=index">
        {{i+1}} - {{supplier.name}}  - {{supplier.email}} - {{supplier.phone}} - {{supplier.address}} 
    </li>

    </ul> 

    <ul>
      <li> {{address}} </li>
      
    </ul>
    

`;

@Component({
selector: 'app-supplier',
template:template,
pipes:[FilterPipe]
})
export class SuppliersComponent{

suppliers: Observable<Array<any>>;
address: Observable<Array<any>>;
urladdress:string;

  constructor (private _http: Http) {
    //this.suppliers = this._http.get('https://jsonplaceholder.typicode.com/users/')
      //.map(response => response.json());

      this.suppliers = this._http.get('/suppliers.json')
      .map(response => response.json());
      
  }

search(searchtext){
    if(searchtext.length<5 || searchtext.length>5  )
    return;

this.urladdress = 'https://maps.googleapis.com/maps/api/geocode/json?address='+searchtext;
console.log(this.urladdress);
   this._http.get(this.urladdress)
                        .map(response => response.json())
                        .debounceTime(300 )
                        .subscribe(
                            (data)=>{this.address=data.results[0].formatted_address},
                            //Displays in case if it hets HTTP error
                            (err)=>{this.address=err}  
                        )

                   
                        
}

}