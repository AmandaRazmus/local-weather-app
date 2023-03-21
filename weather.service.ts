import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    constructor(private httpClient: HttpClient) { } //providing a parameter to constructor

    getCurrentWeather(city: string, country: string){//this is the ts formula that connects service
      return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appID}`)
    }
  }