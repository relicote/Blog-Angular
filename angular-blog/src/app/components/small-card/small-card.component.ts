import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: String = 'https://sm.ign.com/ign_br/screenshot/default/jojos-bizarre-adventure-vento-aureo-thumb_swq4.jpg'
  @Input()

  cardTitle: string = 'Nova temporada de jojo dublada'

  constructor() { }

  ngOnInit(): void {
  }

}
