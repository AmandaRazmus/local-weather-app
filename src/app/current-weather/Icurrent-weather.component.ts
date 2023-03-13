import { Component } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

    current: ICurrentWeather //this made current show up in html
    constructor() { //the code that does things before users
    //see ui
    this.current = {
      city: 'Seattle', 
      country: 'US',
      date: new Date(),
      image: '', 
      temperature: 45,
      description: 'Mostly Cloudy'
    }
}
}
