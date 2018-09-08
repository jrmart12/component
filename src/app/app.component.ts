import { Component } from '@angular/core';

export interface Filter {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filters: Filter[] = [
    {value: 'Todo-0', viewValue: 'Todos'},
    {value: 'SinLeer-1', viewValue: 'Sin Leer'},
    {value: 'SinInventario-2', viewValue: 'Sin Inventario'},
    {value: 'SinTerminar-3', viewValue: 'Sin Terminar'}
  ];
}
