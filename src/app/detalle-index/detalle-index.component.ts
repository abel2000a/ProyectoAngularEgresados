import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleService } from '../services/detalle.service';

@Component({
  selector: 'app-detalle-index',
  templateUrl: './detalle-index.component.html',
  styleUrls: ['./detalle-index.component.css']
})
export class DetalleIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private detalleservice: DetalleService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.detalleservice.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(detalle_id) {
    console.log("delete:"+detalle_id);
    this.detalleservice.delete(detalle_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
