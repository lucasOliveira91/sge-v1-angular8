import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { environment } from 'src/environments/environment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AutenticacaoService } from 'src/app/shared/service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  form: FormGroup;
  formUnidEnsino: FormGroup;
  version: string;

  unidadesEnsino: Object[] = [];
  periodos: Object[] = [];
  subdivisoes: Object[] = [];
  navigateTo: string;
  comboUnidadeEnsino = false;


  constructor(
    private autenticacaoService: AutenticacaoService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userContextService: UserContextService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.version = environment.version;

    this.form = this.fb.group({
      j_username: [null, [Validators.required, Validators.minLength(2)]],
      j_password: [null, [Validators.required]]
    });
  }

  onClickLogin() {
    this.autenticacaoService.login(this.form.controls['j_username'].value, this.form.controls['j_password'].value).subscribe(user => {
      console.log('User' + user)
      this.userContextService.setUser(user);
      this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
    });
  }
}
