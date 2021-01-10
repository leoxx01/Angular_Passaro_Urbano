import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model'

import {OfertasService} from '../ofertas.service'

@Component({
  selector: 'app-divercao',
  templateUrl: './divercao.component.html',
  styleUrls: ['./divercao.component.css'],
  providers: [OfertasService]
})
export class DivercaoComponent implements OnInit {
  public data: Oferta[]
  constructor(private ofertasService:OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertaPorCategoria('diversao').then((data)=>{
      this.data = data
    }).catch((err)=>{
      console.log(err)
    })
  }

}
