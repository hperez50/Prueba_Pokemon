import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './servicios/pokemon.service';
import { CommonModule, NgFor } from '@angular/common';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon | undefined;
  baseUrl: string = 'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(data => {
      this.pokemonList = data;
    });
  }
}
