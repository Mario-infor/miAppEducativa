import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cities = ['Santiago', 'Buenos Aires', 'Bogota', 'Lima', 'Sao Pablo'];
  showCity: boolean = true;
  changeCSS: boolean = true;

  showCities() {
    this.showCity = !this.showCity;
  }

  changeCSSClass() {
    this.changeCSS = !this.changeCSS;
  }
}
