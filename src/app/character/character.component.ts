import { Component, OnInit, Input } from '@angular/core';
import { Char } from '../interfaces'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.styl']
})
export class CharacterComponent implements OnInit {
  @Input() char: Char

  constructor() { }

  ngOnInit() {
  }


}
