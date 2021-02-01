import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  iniciarUnDado(){
    this.route.navigate(['un-dado']);
  }

  inciarDosDados(){
    console.log("Crerar nueva lista");
    this.route.navigate(['dos-dados']);
  }
}
