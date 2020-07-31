import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { environment } from 'src/environments/environment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AutenticacaoService } from 'src/app/shared/service/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

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
    private router: Router,
    private routeStateService: RouteStateService,
    private userContextService: UserContextService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.version = environment.version;

    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required]]
    });
  }

  onClickLogin() {
    this.autenticacaoService.login(this.form.controls['username'].value, this.form.controls['password'].value).subscribe(user => {
      console.log('User' + user)
      this.userContextService.setUser({name:'x'});
      this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
    });
  }
}
