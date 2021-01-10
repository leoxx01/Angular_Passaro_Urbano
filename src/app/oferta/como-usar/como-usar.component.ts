import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


import {OfertasService} from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  private id: number
  public data: string = ''
  
  constructor(private route : ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: any)=>{
      this.id = param.id
    })

    this.ofertasService.getComoUsarPorID(this.id).then((data: string)=>{
      //console.log(data)
      this.data = data
    })
  }

}
