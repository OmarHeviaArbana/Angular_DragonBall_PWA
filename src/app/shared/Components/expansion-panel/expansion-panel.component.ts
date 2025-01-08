import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {

  @Input() character! : Character;

}
