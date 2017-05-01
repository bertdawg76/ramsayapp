import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() {

  }

  ngOnInit() {

  }

    getBackgroundImage() {
      let myStyles = {
          'background-image': 'url(\'../../assets/laels.jpg\')'
      }
      return myStyles
    }



}
