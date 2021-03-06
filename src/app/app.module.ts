import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {  HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DivercaoComponent } from './divercao/divercao.component';

import {RouterModule} from '@angular/router'
import {ROUTES} from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'

//Pipe

import {DescReduzida} from '../app/desc_reduzida.pipe'

// Declara tudo que nos podemos usar na aplicação
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DivercaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescReduzida
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
