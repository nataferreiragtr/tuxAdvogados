import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  title = "Login";
  nameButtomForm = "Logar";
  nameButtomCard = "Não possui conta ? Clique aqui !"


  // Variavel que guarda o formulario
  formulario: FormGroup

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }

  // metodo chamado pelo botão formulario
  formAuth(){
    if(this.nameButtomForm == "Logar"){
        alert ('Botão Login')

    } else if(this.nameButtomForm == "Cadastrar"){
       alert ("Botão cadastrar");
    }

    else {
      alert ('Opção Invalida')
    }
  }
  


// cria e gera validação
  createForm(){
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }


  // metodo chamado pelo botão não possui conta

  alterar() {
    if(this.title == "Login"){
      this.title = "Cadastre-se";
      this.nameButtomForm = " Cadastrar";
      this.nameButtomCard = "Autenticar";
    }else{
      this.title = "Login";
      this.nameButtomCard = "Não possuo conta";
      this.nameButtomForm = "Logar";
    }
  }
}
