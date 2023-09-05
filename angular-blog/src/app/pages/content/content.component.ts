import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://www.siliconera.com/wp-content/uploads/2023/02/jjbajojoseoparts02132023.png?fit=710%2C398'
  contentTitle: string = 'MINHA NOTICIA'
  contentDescription: string = 'bla bla bla'

  constructor(
    private route:ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    )
  }

}
