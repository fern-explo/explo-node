/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ZachkirschApi } from "@fern-api/explo";
import * as core from "../../../../core";

export const SetCustomerRequest: core.serialization.ObjectSchema<
    serializers.SetCustomerRequest.Raw,
    ZachkirschApi.SetCustomerRequest
> = core.serialization.object({
    name: core.serialization.string(),
    customerId: core.serialization.property("customer_id", core.serialization.string()),
    mapping: core.serialization.record(core.serialization.string(), core.serialization.string()),
    isDemoGroup: core.serialization.property("is_demo_group", core.serialization.boolean()),
    properties: core.serialization.unknown(),
    emails: core.serialization.list(core.serialization.string()),
});

export declare namespace SetCustomerRequest {
    interface Raw {
        name: string;
        customer_id: string;
        mapping: Record<string, string>;
        is_demo_group: boolean;
        properties?: unknown;
        emails: string[];
    }
}
