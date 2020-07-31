import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseResourceService } from 'src/app/core/services/base-resource.service';
import { Ocorrencia } from '../../shared/model/Ocorrencia.model';
import { Combo } from 'src/app/shared/model/combo.model';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService extends BaseResourceService<Ocorrencia>{

  constructor(protected injector: Injector) {
    super('api/ocorrencias', injector)
  }

  get(): Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(`${this.apiPath}`)
  }

  getTipos(): Observable<Combo[]> {
    return this.http.get<Combo[]>(`${this.apiPath}/tipos`)
  }

  salvar(value: Object) {
    return this.http.post(`${this.apiPath}`, value)
  }

  
  delete(id): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`);
}
}
