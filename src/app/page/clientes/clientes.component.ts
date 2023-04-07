import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  listaDeClientes = [];

  constructor(private fs: FirebaseService){}

  ngOnInit(): void {
    this.fs.consultaDados().subscribe(caixinha => this.listaDeClientes = caixinha);
  }
}
