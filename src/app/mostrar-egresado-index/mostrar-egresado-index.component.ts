import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EgresadoService } from '../services/egresado.service';

@Component({
  selector: 'app-mostrar-egresado-index',
  templateUrl: './mostrar-egresado-index.component.html',
  styleUrls: ['./mostrar-egresado-index.component.css']
})
export class MostrarEgresadoIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private egresadoService: EgresadoService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.egresadoService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(egresado_id) {
    console.log("delete:"+egresado_id);
    this.egresadoService.delete(egresado_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}