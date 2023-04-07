import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {



// Feito com template driven

  form(formulario: any) {
    console.log(formulario.value);
  }
  
}