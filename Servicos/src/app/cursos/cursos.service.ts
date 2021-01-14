import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private cursos: string[] = ['angular', 'java', 'phonegap'];
  getCursos(){
    return this.cursos;
  }
  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
