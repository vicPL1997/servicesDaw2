import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  texto: string | undefined;
  private enviarTextoSubject = new Subject<string>();
  enviarTextoObservable = this.enviarTextoSubject.asObservable();

  enviarTexto(texto: string) {
    this.texto=texto;
    this.enviarTextoSubject.next(texto);
  }
}


