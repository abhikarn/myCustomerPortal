import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
