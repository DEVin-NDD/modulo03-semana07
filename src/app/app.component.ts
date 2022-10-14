import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  nome = new FormControl("Crhis"); // principal forma de iniciar um campo já com valor 
  sobrenome = new FormControl({value: "e Greg", disabled: true}); // outra forma de iniciar um campo já com valor
  //o disabled: true permite você setar um estado para o input, nesse caso, o estado "DISABLED"
  idade = new FormControl();
  email = new FormControl();
  senha = new FormControl();
  moraEmSC = new FormControl();
  // tecnologias = new FormControl();

  ngOnInit(){
    // console.log("Nome:", this.nome);
    // console.log("Sobrenome:", this.sobrenome);
    // console.log("Idade:", this.idade);
    // console.log("Email:", this.email);
    // console.log("Senha:", this.senha);
    // console.log("Mora em Snata Catarina?:", this.moraEmSC);
  }
  
  mostraValor(){
    //preencha o formulário para verificar cada controlador 
    //Observe principalmente o value e o disabled
    console.log("Nome:", this.nome);
    console.log("Sobrenome:", this.sobrenome);
    console.log("Idade:", this.idade);
    console.log("Email:", this.email);
    console.log("Senha:", this.senha);
    console.log("Mora em Snata Catarina?:", this.moraEmSC);
  } 

}
