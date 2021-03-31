import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {OfertasService} from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';


import {debounceTime, distinctUntilChanged, switchMap,catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  public subjectPesquisa: Subject<string> = new Subject<string>()

  ngOnInit(): void {
    
    // debounceTime é praticamente um setTimeOut
    //distinctUntilChanged verifica se a pesquisa atual é a mesma da passada se for não vai executar a pesquisa
    //Evento pega quando foi disparado no pesquisa e se inscreve no ultimo essa logica é legal porque ela n dispara uma serie de eventos ela
    //só dispara um  
    this.ofertas = this.subjectPesquisa.pipe(debounceTime(1000),distinctUntilChanged(),switchMap((data: string)=>{
      if(data.trim() == ''){
        //retornando um array vazio
        return of<Oferta[]>([])
      }
      return this.ofertaService.pesquisaOfertas(data)
    }),catchError((err: any)=> { 
      return of<Oferta[]>([])
    })
    )
    
    // Dou um subscripe para ver toda mundaça feita 
    this.ofertas.subscribe((ofertas: Oferta[])=>{ 
      this.ofertas2 = ofertas
      console.log(ofertas)})
  }
  public pesquisa(data: string): void{
    /* console.log((<HTMLInputElement>event.target).value) */
    
    // Obeservable se se inscreve em todas mudanças disparadas

    /* this.ofertas = this.ofertaService.pesquisaOfertas(data)
    console.log(this.ofertas)
    this.ofertas.subscribe((response: Oferta[])=>{console.log(response)},((err)=>console.log(err)),()=>{console.log("fluxo de eventos completo")}) */

    // Obeservable se se inscreve na ultima mudança disparadas

    //Dispara o evento 
    console.log(data)
    this.subjectPesquisa.next(data)
  }
  // Se der ruim mudar o type para any
  
  public mouseIn(data: string):any{
    $(data).addClass("active");
  }
  public mouseOut(data: string):any{
    $(data).removeClass("active");
  }

}
