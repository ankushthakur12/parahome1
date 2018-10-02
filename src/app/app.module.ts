import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    HeaderComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2OdTdUYsQFUe9mzqXUXds236_bSM2yVo',
      libraries: ["places"]
})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }