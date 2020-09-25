import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailResolver } from './customer.resolver';
import { CustomerDetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerslistComponent } from './customerslist/customerslist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customerlist',
  },
  {
    path: 'customerlist',
    component: CustomerslistComponent,
  },
  {
    path: 'customers/:id',
    component: CustomerDetailsComponent,
    resolve: {
      customerDetails: CustomerDetailResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
