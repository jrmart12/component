import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule],
})
export class MaterialModule { }