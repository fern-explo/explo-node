/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { ZachkirschApi } from "@fern-api/explo";

export interface GetOrCreateCustomerResponse extends ZachkirschApi.BaseResponse {
    /** Indicates whether a new customer was created. */
    newCustomer: boolean;
    /** The contents of the customer */
    customer: ZachkirschApi.Customer;
}
