import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/core/backend-api.service';
import { CustomerDetailsModel, OrderModel } from '../../customer.model';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  dataSource: MatTableDataSource<OrderModel>;
  displayedColumns: string[] = ['customerId', 'employeeId', 'orderDate', 'requiredDate', 'shippedDate', 'shipVia', 'freight',
    'shipName', 'shipAddress', 'shipCity', 'shipPostalCode', 'shipCountry'];
  constructor(private activateRoute: ActivatedRoute, private backenApi: BackendApiService) { }
  customerDetails: CustomerDetailsModel;
  ngOnInit(): void {
    this.customerDetails = this.activateRoute.snapshot.data.customerDetails as CustomerDetailsModel;
    console.log(this.customerDetails);
    // this.setDataSource(this.customerDetails.customerOrders[0].order);
  }

// tslint:disable-next-line: typedef
setDataSource<T>(source) {
  if (!source) {
    return;
  }
  this.dataSource = new MatTableDataSource<OrderModel>(source);
}

}
