export interface CustomerModel {
    id: string;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
    fax: string;
    country: string;
}

export interface CustomerOrderModel {
    order: OrderModel;
    Orderdetails: OrderDetailsModel[];
}

export interface OrderModel {
    id: string;
    customerId: string;
    employeeId: string;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    shipVia: string;
    freight: string;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipPostalCode: string;
    shipCountry: string;
}


export interface OrderDetailsModel {
    orderId: number;
    productId: number;
    unitPrice: number;
    quantity: number;
    discount: number;
}

export interface CustomerDetailsModel {
    customer: CustomerModel;
    customerOrders: CustomerOrderModel[];
}
