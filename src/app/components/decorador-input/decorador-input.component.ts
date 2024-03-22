import { Component } from '@angular/core';
import { CompartilharInputComponent } from '../compartilhar-input/compartilhar-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorador-input',
  standalone: true,
  imports: [CompartilharInputComponent, CommonModule],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})
export class DecoradorInputComponent {
  nome:string = "Thiago Xavier"
  frutas = ['Maçã', "Banana", "Abacaxi"]

  cadastro = [
    {nome: 'Pazikas', idade: 19, email: "dickcock@gmail.com"},
    {nome: 'Marcelo', idade: 19, email: "marcelocitrus@gmail.com"},
    {nome: 'Lima', idade: 19, email: "glima@gmail.com"}
  ]

}


