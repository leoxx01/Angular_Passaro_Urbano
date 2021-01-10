import { Component, OnInit } from '@angular/core';

import {OfertasService} from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService,]

})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]
  public teste: string = "teste"
  constructor(private ofertasService: OfertasService) { 
    
    console.log(this.teste)     
  }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)
    
  //this.ofertasService.getOfertas2().then((data: Oferta[])=>{this.ofertas = data })
  this.ofertasService.getOfertas3().then((data: Oferta[])=>{this.ofertas = data })

  }

}
