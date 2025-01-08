import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersResponse } from '../models/character-response.interface';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAllCharacters(page: number , limit: number ): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`https://dragonball-api.com/api/characters/${id}`)
  }
}
