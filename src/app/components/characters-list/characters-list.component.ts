import { Component, HostListener, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from 'src/app/models/character.interface';
import { CharactersResponse } from 'src/app/models/character-response.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})

export class CharactersListComponent implements OnInit{
  characters: Character[] = [];
  loading: Boolean = false;
  error: string | null = null;
  currentPage: number = 1;
  limit: number = 10;
  totalPages: number = 0;
  cardsView: boolean = true;
  listView: boolean = false;
  show: boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const bottom = event.target.scrollHeight === event.target.scrollTop + window.innerHeight;
    if (bottom && !this.loading) {
      this.loading = true;
      this.currentPage++;
      this.loadCharacters();
    }
  }

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.loadCharacters()
  }

  loadCharacters(): void {
    this.loading = true;
    this.characterService.getAllCharacters(this.currentPage, this.limit).subscribe({
      next: (response: CharactersResponse) => {
        this.characters = [...this.characters, ...response.items];
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error fetching characters:', error);
        this.loading = false;
      }
    });
  }

  setCardsView(): any {
    this.cardsView = true;
    this.listView = false;
  }
  setListView(): void {
    this.listView = true;
    this.cardsView = false;
  }

}
