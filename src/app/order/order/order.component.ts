import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BackendApiService } from 'src/app/core/backend-api.service';
import { OrderModel } from 'src/app/customer.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<OrderModel>;

  displayedColumns: string[] = ['customerId', 'employeeId', 'orderDate', 'requiredDate', 'shippedDate', 'shipVia', 'freight',
    'shipName', 'shipAddress', 'shipCity', 'shipPostalCode', 'shipCountry'];
  length = 90;
  pageSize = 10;
  selected: string;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private backenApi: BackendApiService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  // tslint:disable-next-line: typedef
  getOrders(event: PageEvent = this.paginator) {
    const pageIndex = `${event && event.pageIndex ? event.pageIndex : 0}`;
    const api = `query/orders?skip=${pageIndex}&take=${event && event.pageSize ? event.pageSize : 10}`;
    this.backenApi.get(api)
      .subscribe((res: any) => {
        if (!res) {
          return;
        }
        this.length = res.total === 0 ? 1000 : res.total;
        this.setDataSource(res.results);
      });
  }

  // tslint:disable-next-line: typedef
  setDataSource<T>(source) {
    if (!source) {
      return;
    }
    this.dataSource = new MatTableDataSource<OrderModel>(source);
  }

}
