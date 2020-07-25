import { Injectable, Injector } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/core/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService extends BaseResourceService<Object>{

  constructor(protected injector: Injector) {
    super('j_spring_security_check', injector)
  }

  login(user: string, pass: string ) {
    return this.http.post(`${this.apiPath}?j_username=${user}&j_password=${pass}`, null);
  }
}
