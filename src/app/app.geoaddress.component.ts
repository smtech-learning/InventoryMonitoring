import {Component} from '@angular/core'
import {GeoAddressService} from './app.geoaddress.service'
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/rx';

@Component({
    selector:'app-address',
    template: `

    <div class="container">
          <form class="form-signin">
        <h2 class="form-signin-heading">Please Enter your zip code</h2>
        <label for="inputEmail"  class="sr-only">Zip Code</label>
        <input type="text" id="inputZipCode" (keyup) = "getCityandStateDetails($event)" class="form-control" placeholder="Zip Code" required autofocus>
        <label for="inputPassword" class="sr-only">City</label>
        <input type="text" id="inputFormattedAddress" class="form-control" placeholder="City" required>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
   </div>
    `,
    providers: [GeoAddressService,HTTP_PROVIDERS] 
})
export class GeoAddressComponent{

constructor(private _geoAddressService: GeoAddressService){
}
getCityandStateDetails(searchTest:any){
  this._geoAddressService.getCityStateFromGeoService(searchTest.target.value);
}

}