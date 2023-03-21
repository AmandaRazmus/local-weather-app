import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service'; //if something is added to the constructor, has to be added here to add the service

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

    current: ICurrentWeather 
    constructor(private weatherService : WeatherService) { 
    //see ui
    this.current = {
      city: '', 
      country: '',
      date: new Date(),
      image: '', 
      temperature: 0,
      description: '',     
    }
    this.weatherService.getCurrentWeather('Redmond', 'US').
    subscribe(data => this.current = data)
    }
}
