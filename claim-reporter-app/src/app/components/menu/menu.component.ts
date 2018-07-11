import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  actualVersion: string;

  constructor() {
  }

  ngOnInit() {
    this.actualVersion = environment.version;
  }
}
