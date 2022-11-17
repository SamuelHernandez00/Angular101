import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  mostrarMensaje = true;
  contador = 1;
  materias: string [] = [
    'Gestion del proceso',
    'Aplicaciones web',
    'Integradora',
    'Desarrollo Movil',
    'Negociacion Empresarial'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
