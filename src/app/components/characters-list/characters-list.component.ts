import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from 'src/app/models/character.interface';
import { CharactersResponse } from 'src/app/models/character-response.interface';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

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

  @ViewChild('container', { static: false }) container!: ElementRef;

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const scrollElement = this.container.nativeElement;
    const bottom = scrollElement.scrollHeight - scrollElement.scrollTop <= scrollElement.clientHeight + 20;

    if (bottom && !this.loading && this.currentPage < this.totalPages) {
      this.loading = true;
      const currentScrollPosition = scrollElement.scrollTop
      this.currentPage++;
      this.loadCharacters(currentScrollPosition);
    }
  }

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.loadCharacters(0)
  }

  loadCharacters(previousScrollPosition: number): void {
    this.loading = true;
    this.characterService.getAllCharacters(this.currentPage, this.limit).subscribe({
      next: (response: CharactersResponse) => {
        this.characters = [...this.characters, ...response.items];
        this.loading = false;
        this.totalPages = response.meta.totalPages;

        setTimeout(() => {
          const scrollElement = this.container.nativeElement;
          scrollElement.scrollTop = previousScrollPosition;
        }, 0);
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
