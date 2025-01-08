import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

cols: number = 1;

 @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width > 1900 && this.cardsView) {
      this.cols = 4;
    } else if (width > 1200 && this.cardsView) {
      this.cols = 3;
    } else if (width > 620 && this.cardsView) {
      this.cols = 2;
    } else {
      this.cols = 1;
    }
  }

  @Input() characters! : any;
  @Input() loading! : Boolean;
  @Input() error! : any;
  @Input() cardsView! : Boolean;
  @Input() listView! : Boolean;
}
