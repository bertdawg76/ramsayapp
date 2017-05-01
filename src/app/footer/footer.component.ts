import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    showDialog = false;
    showModal = false;

  constructor() { }

  ngOnInit() {
  }

}
