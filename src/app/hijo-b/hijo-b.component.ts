import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
@Component({
  selector: 'app-hijo-b',
  templateUrl: './hijo-b.component.html',
  styleUrls: ['./hijo-b.component.css']
})
export class HijoBComponent implements OnInit {

 texto: string | undefined;
 aux: string  | undefined;
constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit(): void {
    this.servicioComunicacion.enviarTextoObservable.subscribe(texto => {
      this.texto=texto;
    });
  }

  cambioTexto(texto: string) {
    this.servicioComunicacion.enviarTexto(texto);
  }
  mayusculas(){
    if(typeof this.servicioComunicacion.texto === 'string'){
      this.texto = this.servicioComunicacion.texto.toLocaleUpperCase() ;
    }  
  }
  minusculas(){
    if(typeof this.servicioComunicacion.texto === 'string'){
      this.texto = this.servicioComunicacion.texto.toLocaleLowerCase() ;
    }  
  }

}
