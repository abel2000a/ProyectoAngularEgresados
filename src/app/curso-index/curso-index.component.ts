import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-index',
  templateUrl: './curso-index.component.html',
  styleUrls: ['./curso-index.component.css']
})
export class CursoIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private cursosservice: CursosService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.cursosservice.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(cursos_id) {
    console.log("delete:"+cursos_id);
    this.cursosservice.delete(cursos_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
