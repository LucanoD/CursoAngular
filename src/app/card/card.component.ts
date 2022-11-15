import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string = "https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?auto=compress&cs=tinysrgb&dpr=1&w=500";
  public Titulo: string = "Curso de angular con interpolacion";

  constructor() { }

  ngOnInit(): void {
  }

}
