import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-clienteupdate',
  templateUrl: './clienteupdate.component.html',
  styleUrls: ['./clienteupdate.component.css']
})
export class ClienteupdateComponent implements OnInit{

  updateForm: FormGroup;
  routeId = null;
  constructor(
    private activated: ActivatedRoute,
    private fs: FirebaseService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void{
    this.createForm("");
    this.routeId = this.activated.snapshot.params['id'];

    if(this.routeId){
      this.fs.consultaUm(this.routeId).subscribe(caixinha => this.createForm(caixinha));
    }


  }

  createForm(dados){
    this.updateForm = this.formBuilder.group({
      url_foto: [dados.url_foto],
      nome: [dados.nome],
      email: [dados.email],
      telefone: [dados.telefone]
    })
  }

  atualizar(){
    this.fs.editaDados(this.routeId, this.updateForm.value);
  }


}

