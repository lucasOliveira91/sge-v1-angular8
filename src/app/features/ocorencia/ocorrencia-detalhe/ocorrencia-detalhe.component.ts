import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OcorrenciaService } from '../ocorrencia.service';
import { Combo } from 'src/app/shared/model/combo.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-ocorrencia-detalhe',
  templateUrl: './ocorrencia-detalhe.component.html',
  styleUrls: ['./ocorrencia-detalhe.component.css']
})
export class OcorrenciaDetalheComponent implements OnInit {

  tiposOcorrencias = [];
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ocorrenciaService: OcorrenciaService,
    private notificationService: NotificationService,
    private routeStateService: RouteStateService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      
    }

    this.form = this.fb.group({
      coTipoOcorrencia: [null, [Validators.required]],
      txOcorrencia: [null, [Validators.required, Validators.minLength(10)]]
    });

    this.carregarTiposOcorrencias();
  }

  carregarTiposOcorrencias() {
    this.ocorrenciaService.getTipos().subscribe(resp => {
      resp.forEach(p => this.tiposOcorrencias.push({ label: p['descricao'], value: p['id'] }))
    });
  }

  salvar() {
    if(this.form.valid) {
      this.ocorrenciaService.salvar(this.form.value).subscribe(resp => {
        this.notificationService.notify('Ocorrência salva com sucesso.');
        this.routeStateService.add("Ocorrências", '/main/ocorrencias', null, true);
      });
    }
  }
}
