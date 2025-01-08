import { Component, Input} from '@angular/core';
import { Character } from '../../../models/character.interface';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
      trigger('cardAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition('void => *', [animate('900ms ease-out')]),
      transition('* => void', [animate('300ms ease-in')])
      ])
    ]
})
export class CardComponent {
  @Input() item!: Character;
}
