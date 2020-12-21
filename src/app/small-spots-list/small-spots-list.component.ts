import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { SharedService } from './../shared.service';
import games from '../../assets/games.json';

@Component({
  selector: 'small-spots-list',
  templateUrl: './small-spots-list.component.html',
  styleUrls: ['./small-spots-list.component.less']
})
export class SmallSpotsListComponent implements OnInit {
  gamesList: Game[];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.gamesList = Object.values(games);
  }

}
