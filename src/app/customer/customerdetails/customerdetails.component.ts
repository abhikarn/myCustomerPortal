import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/core/backend-api.service';
import { CustomerDetailsModel } from '../customer.model';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private backenApi: BackendApiService) { }
  customerDetails: CustomerDetailsModel;
  ngOnInit(): void {
    this.customerDetails = this.activateRoute.snapshot.data.customerDetails as CustomerDetailsModel;
    console.log(this.customerDetails);
  }

}
