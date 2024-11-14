import { Component, OnInit } from '@angular/core';
import { Iecom } from 'src/app/modul/modul';
import { EcomService } from '../../service/ecom.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ecomarray ! : Array<Iecom>



  search2 ! : string

  constructor(private _ecom : EcomService) { }

  ngOnInit(): void {
    this.ecomarray = this._ecom.fetchAll()
  }



}
