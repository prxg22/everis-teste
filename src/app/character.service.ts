import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Char } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url: string = 'http://www.mocky.io/v2/5b2971722f00006300f561a9'
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Char[]> {
    const chars = <Observable<Char[]>> this.http
        .get(this.url)

    return chars
  }
}
