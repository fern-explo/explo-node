/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Explo } from "@fern-api/explo";
import * as core from "../../../../core";

export const DeleteCustomerResponse: core.serialization.ObjectSchema<
    serializers.DeleteCustomerResponse.Raw,
    Explo.DeleteCustomerResponse
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseResponse));

export declare namespace DeleteCustomerResponse {
    interface Raw extends serializers.BaseResponse.Raw {}
}
