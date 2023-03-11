/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Customer } from "./api/resources/customer/client/Client";

export declare namespace ZachkirschApiClient {
    interface Options {
        environment: string;
        token: core.Supplier<string>;
    }
}

export class ZachkirschApiClient {
    constructor(private readonly options: ZachkirschApiClient.Options) {}

    private _customer: Customer | undefined;

    public get customer(): Customer {
        return (this._customer ??= new Customer(this.options));
    }
}