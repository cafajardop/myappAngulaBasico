import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  //Se puede hacer asi pero lo recomendable es hacerlo en el constructor
  //anio = new Date().getFullYear();

  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
  }

} 
