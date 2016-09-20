import {Observable} from 'rxjs/rx';
import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core'; 

@Injectable()
export class GeoAddressService{
private _GeoAddressurl = "http://maps.googleapis.com/maps/api/geocode/json?address=";
constructor(private _http:Http){

}
 getCityStateFromGeoService(searchKeyWord:String){
     this._http.get(this._GeoAddressurl+searchKeyWord)
     .map((res:Response)=>res.json())
     .subscribe(data=>console.log(data));
     
 }

}