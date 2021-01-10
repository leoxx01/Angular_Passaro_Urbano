import { Component, OnInit } from '@angular/core';

import {OfertasService} from '../../ofertas.service'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  private id: number
  public data:string

  constructor(private ofertasService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param:any)=>{
      this.id = param.id
    })
    this.ofertasService.getOndeFicaPorID(this.id).then((data: string)=>{
      this.data = data
    })
  }

}
