import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-clienteformulario',
  templateUrl: './clienteformulario.component.html',
  styleUrls: ['./clienteformulario.component.css']
})
export class ClienteFormularioComponent implements OnInit{
  formDataDriven!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fs: FirebaseService
    ){}
  ngOnInit(): void {
    this.validaForm();
  }

  validaForm(){
    this.formDataDriven = this.formBuilder.group({
      url_foto: ['', [Validators.required, Validators.minLength(3)]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      telefone: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  cadastrar(){
    try{
      this.fs.cadastrarDados(this.formDataDriven.value);
      alert("Novo cliente cadastrado com êxito!")
    }catch(err){
      console.log(err);
    }
  }
}
