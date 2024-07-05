import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperatureService } from 'src/app/services/temperature.service';
import { UtilService } from 'src/app/services/validations/util.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  
  formulario!: FormGroup;
  weather: any;
  name: any;
  temperature: any;
  humidity: any;
  latitude: any;
  longitude: any;
  description: any;
  showError: boolean = false;
  messageError: string = "";
  date = new Date();

  constructor(private fb: FormBuilder, private utilService: UtilService, private _time: TemperatureService) { 
    this.iniciaFormulario();
  }

  ngOnInit() {}

  /**
   * Método para crear e inciar el formulario
   */
  iniciaFormulario() {
    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required, this.utilService.noSantiago, Validators.pattern('^[a-zA-Z ]*$')]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }

  consultar() {
    console.log(this.formulario);

    this._time.getTimeState(this.formulario.get('ciudad')?.value,
                            this.formulario.get('codigo')?.value )
                            .subscribe((response: any) => {
                              this.showError = false;
                              this.weather = response;
                              this.name = this.weather.name;
                              this.temperature = this.weather.main.temp;
                              this.humidity = this.weather.main.humidity;
                              this.latitude = this.weather.coord.lat;
                              this.longitude = this.weather.coord.lon;
                              this.description = this.weather.weather[0].description;
                              console.log("response: ", response);
                            },
                          (error: any) => {
                            this.showError = true;
                            this.messageError = "Error al consultar la información del clima. Por favor intente nuevamente.";
                          }
                          );
  }
}
