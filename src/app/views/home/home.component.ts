import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon';

interface Json {
  data: []
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  baseUrl = environment.baseUrl;
  cards: Array<Pokemon> = [];
  loading: boolean = false;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCards(){
    this.loading = true
    this.httpClient.get(this.baseUrl + "/v2/cards?")
    .subscribe(
      value => {
        this.cards = (value as Json).data
        this.loading = false
        console.log(this.cards)
      },
      error => {
        this.loading = false;
        alert('Ops! Erro ao carregar cartões... :/')
      }
    )
  }

  ngOnInit(): void {
    this.getCards()
  }

}
