import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerslistComponent } from './customerslist/customerslist.component';
import { CustomerRoutingModule } from './customer.routing.module';
import {MatTableModule} from '@angular/material/table';
import { CustomerDetailsComponent } from './customerdetails/customerdetails.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [CustomerslistComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CustomerRoutingModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class CustomerModule { }
