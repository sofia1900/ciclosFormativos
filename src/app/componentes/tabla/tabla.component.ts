import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() titulo : string = ""
  @Input() cabeceras: any[] = [];
  @Input() datos: any[] = [];
}
