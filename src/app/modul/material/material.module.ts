import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';






let newArray = [MatButtonModule,MatIconModule,MatToolbarModule,MatMenuModule,MatCardModule,MatSidenavModule,MatListModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule , ...newArray
  ],exports: [...newArray]
})
export class MaterialModule { }
