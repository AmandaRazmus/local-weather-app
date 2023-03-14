import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from @angular/common/http //read this online to connect the angular library to the weather API
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule //have to include here too to say we are using this library
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
