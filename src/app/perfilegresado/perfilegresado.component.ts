import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedioService } from '../services/medio.service';

@Component({
  selector: 'app-perfilegresado',
  templateUrl: './perfilegresado.component.html',
  styleUrls: ['./perfilegresado.component.css']
})
export class PerfilegresadoComponent implements OnInit {
  list;
  constructor(
    private medio: MedioService,
    private route: ActivatedRoute
    ) {  
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.medio.getList().subscribe(response => {
      this.list=response;
      console.log(this.list);
    });
  }


}
