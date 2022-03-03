import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Hulk', 'Spiderman', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];

  borrarHeroe() {
    let heroe = this.heroes.shift() || '';

    this.heroesBorrados.push(heroe);
  }

  hayHeroe(): boolean {
    if (this.heroesBorrados.length > 0) {
      return true;
    }else{
      return false;
    }
  }

}
