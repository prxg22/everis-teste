import { Component, OnInit } from '@angular/core';
import { Char } from '../interfaces'
import { CharacterService } from '../character.service'


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.styl']
})
export class CharacterListComponent implements OnInit {
  chars: Char[] = []
  selected: Char = null

  get isLoading() {
    return !this.chars || this.chars.length < 1
  }
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.get().subscribe(chars => this.chars = chars)
  }

}
