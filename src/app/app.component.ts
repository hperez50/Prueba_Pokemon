import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './servicios/pokemon.service';
import { NgFor } from '@angular/common';
import { Pokemon } from './models/pokemon.model';
//import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  title = 'pokemon-app';

 // pokemonList: any[] = [];
  selectedPokemon: string = "";
  pokemon: any;
  pokemonImageUrl: string = "";
  hp: number | undefined ;
  attack: number | undefined;
  defense: number | undefined;
  pokemonList: Pokemon | undefined;
  //pokemonList: import("c:/Users/heibe/pokemon-app/src/app/models/pokemon.model").Pokemon;

  //pokemonList!: Pokemon;


  //pokemonList: number | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(data => {
      this.pokemonList = data;
    });
  }

  // onPokemonSelect(name: string): void {
  //   this.pokemonService.getPokemon(name).subscribe(data => {
  //     this.pokemon = data;
  //     this.pokemonImageUrl = this.pokemonService.getPokemonImageUrl(name);
  //     this.hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
  //     this.attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
  //     this.defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
  //   });
  // }


}
