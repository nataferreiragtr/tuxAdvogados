import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  descricao = "A TuxAdvogados é uma empresa do ramo jurídico, que está sempre buscando melhorar o atendimento aos seus clientes. Pensando nisso, a empresa contratou nossos serviços para desenvolver uma aplicação para cadastro de clientes."

  listaImagem = [
    "https://blog.ebradi.com.br/wp-content/uploads/2022/06/ebradi_ebradi_image_490.jpeg",
    "https://s2.glbimg.com/UP2K-TqCD1WWCdfygwLK6dqQi2U=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/y/d/CGYc7lR8GXcXX1nd4YOg/foto05leg-101-advoga-e1.jpg",
    "https://www.consultoriarr.com.br/wp-content/uploads/2018/12/advogados.jpg",
    "https://s.conjur.com.br/img/b/advogado2.jpeg",
    "https://menezesemenezes.com.br/wp-content/uploads/2021/04/Menezes-e-Menezes-Advogados-2019-47.jpg",
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
