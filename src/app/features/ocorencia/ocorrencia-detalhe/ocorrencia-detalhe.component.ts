import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OcorrenciaService } from '../ocorrencia.service';
import { Combo } from 'src/app/shared/model/combo.model';

@Component({
  selector: 'app-ocorrencia-detalhe',
  templateUrl: './ocorrencia-detalhe.component.html',
  styleUrls: ['./ocorrencia-detalhe.component.css']
})
export class OcorrenciaDetalheComponent implements OnInit {

  tiposOcorrencias = [];

  constructor(
    private route: ActivatedRoute,
    private ocorrenciaService: OcorrenciaService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      
    }

    this.carregarTiposOcorrencias();
  }

  carregarTiposOcorrencias() {
    this.ocorrenciaService.getTipos().subscribe(resp => {
      resp.forEach(p => this.tiposOcorrencias.push({ label: p['descricao'], value: p['id'] }))
    });
  }
}
