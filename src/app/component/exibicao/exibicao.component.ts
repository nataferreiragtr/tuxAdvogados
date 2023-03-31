import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})
export class ExibicaoComponent {
  @Input() clientes: any[] | undefined;
}