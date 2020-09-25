
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendApiService } from '../core/backend-api.service';
import { CustomerDetailsModel } from './customer.model';
import { CustomerModule } from './customer.module';
@Injectable({ providedIn: 'root' })
export class CustomerDetailResolver implements Resolve<CustomerDetailsModel>  {
    constructor(private backenApi: BackendApiService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const customerId = route.params && route.params.id;
        if (!customerId) {
            throw new Error('customerId required');
        }
        const api = `customers/${customerId}`;
        return this.backenApi.get<CustomerDetailsModel>(api);
    }
}
