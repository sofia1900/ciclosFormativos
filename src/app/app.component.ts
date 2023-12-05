import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
