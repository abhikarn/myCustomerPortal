import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { BackendApiService } from 'src/app/core/backend-api.service';
import { CustomerModel } from '../../customer.model';
import { CustomerModule } from '../customer.module';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.scss']
})
export class CustomerslistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<CustomerModel>;
  constructor(private backenApi: BackendApiService) { }
  displayedColumns: string[] = ['companyName', 'contactName', 'contactTitle', 'country'];
  length = 90;
  pageSize = 10;
  selected: string;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  ngOnInit(): void {

    this.getCustomerData();

  }
  // tslint:disable-next-line: typedef
  getCustomerData(event: PageEvent = this.paginator) {
    const length = `${event && event.pageIndex ? event.pageIndex : 0}`;
    const api = `query/customers?skip=${length}&take=${event && event.pageSize ? event.pageSize : 10}`;
    this.backenApi.get(api)
      .subscribe((res: any) => {
        if (!res) {
          return;
        }
        this.length = res.total === 0 ? 90 : res.total;
        this.setDataSource(res.results);
      });
  }

  // tslint:disable-next-line: typedef
  setDataSource<T>(source) {
    if (!source) {
      return;
    }
    this.dataSource = new MatTableDataSource<CustomerModel>(source);
  }

  // tslint:disable-next-line: typedef
  search(event: any) {
    const length = `${event && event.pageIndex ? event.pageIndex : 0}`;
    let api = `query/customers?skip=${length}&take=${event && event.pageSize ? event.pageSize : 10}`;
    if (!!event.target.value) {
      api = `query/customers?${this.selected}=${event.target.value}`;
    }
    this.backenApi.get(api).subscribe((res: any) => {
          if (!res) {
            return;
          }
          this.length = res.total === 0 ? 90 : res.total;
          this.setDataSource(res.results);
        });
  }
}
