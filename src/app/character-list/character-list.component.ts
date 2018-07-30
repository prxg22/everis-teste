import { Component, OnInit } from '@angular/core';
import { Char } from '../interfaces'

const chars = [
  {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  },
  {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  }
]

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.styl']
})
export class CharacterListComponent implements OnInit {
  chars: Char[] = chars
  selected: Char = null

  constructor() { }

  ngOnInit() {
  }
}
