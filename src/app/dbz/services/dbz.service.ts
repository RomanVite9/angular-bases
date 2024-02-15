import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {name: 'Krilin', power: 500, id: uuid()},
    {name: 'Goku', power: 1000, id: uuid()},
    {name: 'Vegeta', power: 7500, id: uuid()}
  ];
  onNewCharacter(character: Character):void{

    const newCharacter: Character = {...character};
    this.characters.push(newCharacter);
  }
  onDeleteCharacter(id: string) : void{
    this.characters = this.characters.filter(item => item.id !== id);
  }
  constructor() { }
}
