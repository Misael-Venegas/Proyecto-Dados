import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class JugarPage implements OnInit {

  retos;
  constructor() { }

  ngOnInit() {
    this.retos = localStorage.getItem('retos');
    console.log( this.retos);
  }

}
