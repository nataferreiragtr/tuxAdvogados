import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  descricao = "Página imáginaria criada para atividades academicas do curso Linguagem Script Web do Senac RJ. Considera-se que está em constante desenvolvimento."

  listaImagem = [
    "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg",
    "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_640.jpg",
    "https://cdn.pixabay.com/photo/2018/11/17/07/10/notebook-3820634_640.jpg",
    "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg"



  ]

  i = 0
  img = this.listaImagem[this.i]

  trocarImagem() {
    if (this.i < 5) {
      this.i += 1
      this.img = this.listaImagem[this.i]
    }
    if (this.i == 5) {
      this.i = 0
      this.img = this.listaImagem[this.i]
    }
  }

}
