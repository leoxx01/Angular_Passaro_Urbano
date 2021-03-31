// Pipe feito para deixar texto bonitinho na barra de pesquisa se o tamanho dele for maior do que 15 caracteres
import {Pipe, PipeTransform} from '@angular/core'

//Definindo que isso é um pipe não um componente para o angular não intrepetar errado no app.module
@Pipe({
    name: 'desc_reduzida'
})
export class DescReduzida implements PipeTransform{
    transform(texto: string):string{
        if(texto.length > 15){
            return texto.substr(0,15) + ' ...'
        }
        return texto
    }
}