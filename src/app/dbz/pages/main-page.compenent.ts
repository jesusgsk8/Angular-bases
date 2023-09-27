import { Component,  } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    
constructor(public dbzSevice: DbzService){}

get character(): Character[]{
    return [...this.dbzSevice.characters];
}

onDeleteCharacter(id: string):void{
    this.dbzSevice.deleteCharacterById(id);
}

onNewCharacter(character: Character):void{
    this.dbzSevice.addCharacter(character)
}

}