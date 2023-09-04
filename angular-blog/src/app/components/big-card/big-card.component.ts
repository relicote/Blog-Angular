import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

    @Input()
    photoCover: String = '';
    @Input()
    cardTitle: String = 'NOVO JOESTAR ANUNCIADO (SPOILER)';
    @Input()
    cardDescription: string = 'O novo Jojo já tem nome e aparencia, venha conferir em primeira mão!'

  constructor() { }

  ngOnInit(): void {
  }

}
