import { Component } from '@angular/core';
import {TablaComponent} from "../tabla/tabla.component";

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [
    TablaComponent
  ],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  misCabeceras: string[] = ["Titulo", "Autor"];
  misDatosL: any[] = [
    { "Titulo": "El quijote", "Autor": "Cervantes" },
    { "Titulo": "100 años de soledad", "Autor": "Gabriel García Márquez" },
    { "Titulo": "Los pilares de la Tierra", "Autor": "Ken Follet" }
  ];
  misDatosR: any[] = [
    { "Titulo": "Jara y sedal", "Autor": "A.Lopez" },
    { "Titulo": "Pc Computer", "Autor": "MA Editorial" },
    { "Titulo": "Muy Interesante", "Autor": "SA Edition" }
  ];
  misDatosM: any[] = [
    { "Titulo": "Rapsody", "Autor": "Queen" },
    { "Titulo": "Motomamy", "Autor": "Rosalía" },
    { "Titulo": "Despechada", "Autor": "Shakira" }
  ];
  misDatosC: any[] = [
    { "Titulo": "Napoleón", "Autor": "Ridley Scoot" },
    { "Titulo": "Frozen", "Autor": "Jennifer Lee" },
    { "Titulo": "Titanic", "Autor": "James Cameron" }
  ];
}
