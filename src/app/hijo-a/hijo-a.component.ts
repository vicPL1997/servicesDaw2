import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-hijo-a',
  templateUrl: './hijo-a.component.html',
  styleUrls: ['./hijo-a.component.css']
})
export class HijoAComponent implements OnInit {
  texto: string | undefined;
  constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit(): void {
    this.servicioComunicacion.enviarTextoObservable.subscribe(texto => {
      this.texto=texto;
    });
  }

  cambioTexto(texto: string) {
    this.servicioComunicacion.enviarTexto(texto);
  }

}
