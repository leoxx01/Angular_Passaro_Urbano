import  {Oferta} from './shared/oferta.model'
import { HttpClient, HttpEvent, HttpResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'

import {URL_API} from './app.api'
import {URL_API_COMOUSAR } from './app.api'
import {URL_API_ONDEFICA} from './app.api'

import { Observable } from 'rxjs'
import { map, filter, scan, retry } from 'rxjs/operators';

@Injectable() // para poder injetar os services em outros lugares

export class OfertasService{

    constructor(private http:  HttpClient ){

    }

    public ofertas: Array<Oferta>=[
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public getOfertas(): Array<Oferta>{
        return this.ofertas
    }
    public getOfertas2(): Promise<Oferta[]>{
        return new Promise((resolve, reject)=>{
           setTimeout(
            () => resolve(this.ofertas),3000
           )
        }) 
    }
    public getOfertas3(): Promise<Oferta[]>{
       return this.http.get(`${URL_API}`).toPromise().then((data: Oferta[])=>{
         
            return data
        })
    }

    public getOfertaPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`${URL_API}?categoria=${categoria}`).toPromise().then((data: any)=>{   
            console.log(data) 
            return data
        }).catch((err)=>{console.log(err)})
    }
    public getOfertaPorID(id: number): Promise<Oferta[]>{
        return this.http.get(`${URL_API}?id=${id}`).toPromise().then((data: any )=>{
            return data[0]
        }).catch(err=>console.log(err))
    }
    public getComoUsarPorID(id: number): Promise<string>{
        return this.http.get(`${URL_API_COMOUSAR}?id=${id}`).toPromise().then((data: any)=>{
            return data[0].descricao
        })
    }
    public getOndeFicaPorID(id: number): Promise<string>{
        return this.http.get(`${URL_API_ONDEFICA}?id=${id}`).toPromise().then((data: any)=>{
            return data[0].descricao
        })
    }
    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`).pipe(map((resposta: any)=> resposta),retry(10))
        //return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`).pipe(map((resposta: any)=> resposta),retry(10))
        //Retry tenta fazer uma tentativa pelo valor estipulado dps das 10 tentativas ele explode o erro
    } 
}
