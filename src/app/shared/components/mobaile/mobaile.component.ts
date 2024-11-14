import { Component, OnInit } from '@angular/core';
import { Iphone } from 'src/app/modul/modul';
import { PhoneService } from '../../service/phone.service';

@Component({
  selector: 'app-mobaile',
  templateUrl: './mobaile.component.html',
  styleUrls: ['./mobaile.component.scss']
})
export class MobaileComponent implements OnInit {
  phonearray !: Array<Iphone>

  constructor( private _phone : PhoneService) { }

  ngOnInit(): void {
    this.phonearray = this._phone.fetchAll()

  }

}
