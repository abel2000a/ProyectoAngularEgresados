import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresa-index',
  templateUrl: './empresa-index.component.html',
  styleUrls: ['./empresa-index.component.css']
})
export class EmpresaIndexComponent implements OnInit {


  list;
  constructor(
    private route: ActivatedRoute,
    private empresaservice: EmpresaService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.empresaservice.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(empresa_id) {
    console.log("delete:"+empresa_id);
    this.empresaservice.delete(empresa_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }


}
