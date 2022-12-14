import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercicio-slide',
  templateUrl: './exercicio-slide.component.html',
  styleUrls: ['./exercicio-slide.component.css']
})
export class ExercicioSlideComponent implements OnInit {

  //Grupo de formulário
  formPurchase = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    address2 : new FormControl(),
    country : new FormControl(),
    state : new FormControl(),
    zip : new FormControl(),
    formPayment: new FormGroup({ 
      paymentMethod: new FormControl(), 
      cardName : new FormControl(), 
      cardNumber : new FormControl(), 
      cardExpiration: new FormControl(), 
      cvv: new FormControl(), 
    })
  })

  formPurchase2: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { 
    


    this.formPurchase2 = formBuilder.group({
      firstName: formBuilder.control(""),
      lastName: [''],
      username: new FormControl(),
      email: formBuilder.control({value: "", disabled:false}),
      address: formBuilder.group({

      }),
    })
  }

  ngOnInit(): void {
  }

  showObject(){
    // preencha o formulário antes de envia-lo
    console.log("Grupo:", this.formPurchase);
  }
}
