/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { Explo } from "@fern-api/explo";
import * as core from "../../../../../core";

export const RefreshCustomerTokenRequest: core.serialization.Schema<
    serializers.RefreshCustomerTokenRequest.Raw,
    Explo.RefreshCustomerTokenRequest
> = core.serialization.object({
    currentToken: core.serialization.property("current_token", core.serialization.string()),
});

export declare namespace RefreshCustomerTokenRequest {
    interface Raw {
        current_token: string;
    }
}
