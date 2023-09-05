import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://www.siliconera.com/wp-content/uploads/2023/02/jjbajojoseoparts02132023.png?fit=710%2C398'
  contentTitle: string = 'MINHA NOTICIA'
  contentDescription: string = 'bla bla bla'

  constructor() { }

  ngOnInit(): void {
  }

}
