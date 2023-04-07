import { Injectable, OnInit } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from "rxjs";

// Determina que esse arquivo é um serviço
@Injectable({
    providedIn: 'root'
})

export class FirebaseService{
    // Variavel que vai receber e manipular as coleções
    minhaColecao: AngularFirestoreCollection;

    // CONSTRUTOR: Faz a injeção de dependencia
    constructor(private af: AngularFirestore){
        this.minhaColecao = this.af.collection('clientes');
    }

    // MÉTODOS

    // Para capturar todas as fotos.
    consultaDados(){
        return this.minhaColecao.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                })
            })
        )
    }

    // Para capturar apenas um dado
    consultaUm(id){
        return this.minhaColecao.doc(id).valueChanges();
    }

    cadastrarDados(dados: any){
        return this.minhaColecao.add(dados);
    }

    editaDados(id, dados){
        return this.minhaColecao.doc(id).update(dados);
    }

    excluirDados(id){
        return this.minhaColecao.doc(id).delete();
    }

}