import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
   animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
      ),
      transition(':leave',
        [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
      )
    ])
  ]
})
export class ListComponent {
    @Input() items!: any;
}
