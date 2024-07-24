import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json';
  private link =   'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/'

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}`);
  }

  getPokemonImageUrl(name: string): string {
    return  `${this.link}${name.toLowerCase()}.jpg`;
  }
}
