import { Component, Input } from '@angular/core';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})
export class ExibicaoComponent {
  @Input() clientes: any[] | undefined;

  constructor(private fs: FirebaseService){}

  excluir(id){
    this.fs.excluirDados(id);
    alert("Êxito ao excluir foto !!!")
  }
}