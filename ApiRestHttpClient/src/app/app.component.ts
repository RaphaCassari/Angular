import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { Car } from './models/car';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  car = {} as Car;
  cars: Car[];

  constructor(private carService: CarService) {}
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getCars();
  }

  // defini se um carro será criado ou atualizado
  // tslint:disable-next-line: typedef
  saveCar(form: NgForm) {
    if (this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  // tslint:disable-next-line: typedef
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  // deleta um carro
  // tslint:disable-next-line: typedef
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }

  // copia o carro para ser editado.
  // tslint:disable-next-line: typedef
  editCar(car: Car) {
    this.car = { ...car };
  }

  // limpa o formulario
  // tslint:disable-next-line: typedef
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }

}
