import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iecom } from 'src/app/modul/modul';
import { EcomService } from '../../service/ecom.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ecomdetaol',
  templateUrl: './ecomdetaol.component.html',
  styleUrls: ['./ecomdetaol.component.scss']
})
export class EcomdetaolComponent implements OnInit {
  

  

  // id !: number

  // ecomobj ! : Iecom

  // private _route =  Inject(ActivatedRoute)
  // private _service = Inject(EcomService)

  constructor(private _service : EcomService) { }

  ngOnInit(): void {
    // this._route.params.Subscribe(res=>{
    //   this.ecomobj = res[this.id]
    // })

    
    
  }

}
