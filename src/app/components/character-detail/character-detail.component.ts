import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

character!: Character;

constructor (
  private charactersService: CharactersService,
  private activatedRoute: ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.charactersService.getCharacterById(identifier).subscribe({
      next: (character) => {
        if (!character) {
          this.router.navigateByUrl('/');
          return;
        }
        this.character = character;
      },
      error: (error) => {
        console.error('Error fetching character:', error);
        this.router.navigateByUrl('/');
      }
    });
  }
}
