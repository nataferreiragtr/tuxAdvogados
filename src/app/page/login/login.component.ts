import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticarService } from 'src/app/servico/autenticar.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private autenticaService: AutenticarService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.createForm();
  }

  // metodo chamado pelo botão formulario
  formAuth(){
    if(this.nameButtomForm == "Logar"){

        alert ("Botão Login");
        

        // Autentica um usuario existente
        this.autenticaService.autenticarUser(this.formulario.value)

        // Redireciona para a pagina
        this.router.navigate(['/home']);

    } else if(this.nameButtomForm == "Cadastrar"){

       alert ('Usuario Cadastrado');

       // Cadastra um usuario para autenticar no banco de dados
       this.autenticaService.cadastrarUser(this.formulario.value);

       //Direciona para a tela de login
       this.router.navigate(['/']);


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
      this.nameButtomForm = "Cadastrar";
      this.nameButtomCard = "Já tenho conta";
    }else{
      this.title = "Login";
      this.nameButtomForm = "Logar";
      this.nameButtomCard = "Não possui conta? Clique aqui";    
    }
  }
}
