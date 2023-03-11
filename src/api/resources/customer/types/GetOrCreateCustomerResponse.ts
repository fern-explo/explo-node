/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Explo } from "@fern-api/explo";

export interface GetOrCreateCustomerResponse extends Explo.BaseResponse {
    /** Indicates whether a new customer was created. */
    newCustomer: boolean;
    /** The contents of the customer */
    customer: Explo.Customer;
}
