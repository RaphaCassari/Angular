import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkUol: string;

cursos: string[] = [];
  constructor(private cursosService: CursosService) {
    this.linkUol = 'uol.com';

    this.cursos = this.cursosService.getCursos();

   }

  ngOnInit(): void {
  }

}
