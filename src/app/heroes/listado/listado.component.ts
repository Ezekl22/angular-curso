import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk','Thor', 'Capitan America'];
  HeroeBorrado: string = '';
  borrarHeroe(){ 
    this.HeroeBorrado = this.heroes.shift() || '';
  }

}
