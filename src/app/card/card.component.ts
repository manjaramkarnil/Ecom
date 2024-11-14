import { Component, Input, OnInit } from '@angular/core';
import { EcomService } from '../shared/service/ecom.service';
import { Iecom } from '../modul/modul';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() getcard ! : Iecom

  constructor( private _ecom : EcomService) { }

  ngOnInit(): void {
  }

  product(title :string,des:string,cat : string ,img:string){
    

    let obj = {

      ...this.getcard,
      
      title : title,
     
      description : des,
  
      category : cat,
      image : img,
     

    }
    this._ecom.update(obj)
  }

}
