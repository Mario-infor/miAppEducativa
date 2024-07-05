import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'd1bc8ee12c114e906e291cc274a6f3bd';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  getTimeState(city: string, code: string) {
    const url = `${baseURL}?q=${city},${code}&appid=${apiKey}`;
    return this.http.get(url);
  }
}
