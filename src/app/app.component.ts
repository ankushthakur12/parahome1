import { Component } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@googlemaps';


import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { typeSourceSpan } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('search') public searchElement: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
this.mapsAPILoader.load().then(
() => {
let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

autocomplete.addListener("place_changed", () => {
this.ngZone.run(() => {
let place: google.maps.places.PlaceResult = autocomplete.getPlace();
if(place.geometry === undefined || place.geometry === null ){
 return;
}
});
});
}
);
  }

  title = 'parahome';
}
