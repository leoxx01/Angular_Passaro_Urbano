import { importType } from '@angular/compiler/src/output/output_ast';

import { Component, OnInit ,OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {Oferta} from '../shared/oferta.model'

import {OfertasService} from '../ofertas.service'
import { Observable, Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy{
  public id: number
  public data: Oferta[]

  
  private meuObeservableTeste: Subscription

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any)=>{
      console.log(param)
      this.ofertaService.getOfertaPorID(param.id).then((data:Oferta[])=>{
        console.log(data)
        this.data = data
      })
    },(err)=>{console.log(err)},
    ()=>console.log("Teoricamento concluido")
    )
   

   /*  let tempo = Observable.interval(500)

    tempo.subscribe((interval: number)=>{
      console.log(interval)
    }) */

    //Observavel
/* 
    let meuObservable = Observable.create((observer: Observer<any>)=>{
      observer.next('Ola')
    })

    //Observador

    this.meuObeservableTeste = meuObservable.subscribe((data: any)=>{
      console.log(data)
    }) */
  }
  ngOnDestroy(){
   /*  this.meuObeservableTeste.  () */
  }

}
