import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  listaDeClientes = [
    { nome: 'Maria Clara Ramos', imagem: 'https://cdn.pixabay.com/photo/2012/02/23/08/57/bag-15841_960_720.jpg', email: 'maria.clara@gmail.com', telefone: '(21) 99999-1111' },
    { nome: 'Michel Lutegar DOrsi', imagem: 'https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_960_720.png', email: 'michel.dorsi@gmail.com', telefone: '(21) 99999-2222' },
    { nome: 'Pâmela Lutegar Deiro', imagem: 'https://thumbs.dreamstime.com/z/3d-emoticons-grandes-jogo-2-73128.jpg', email: 'pamela.deiro@gmail.com', telefone: '(21) 99999-3333' },
    { nome: 'Diogo Rosa Marinho', imagem: 'https://i.pinimg.com/736x/3b/92/69/3b9269afba3afcd53ac3274b2c72f91d.jpg', email: 'pamela.deiro@gmail.com', telefone: '(21) 99999-3333' },
    { nome: 'Rosiane Dorsi Pereira', imagem: 'https://img.freepik.com/fotos-premium/emoji-3d-e-rostos-de-emoticons-emojis-flutuantes-ou-emoticons-com-surpresa-engracado-e-rindo-isolados-no-fundo-roxo-ilustracao-3d-render_73903-894.jpg', email: 'pamela.deiro@gmail.com', telefone: '(21) 99999-3333' },
  ];
}
