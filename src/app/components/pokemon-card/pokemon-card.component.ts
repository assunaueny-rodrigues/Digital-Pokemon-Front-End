import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
