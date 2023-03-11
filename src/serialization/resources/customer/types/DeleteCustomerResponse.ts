/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ZachkirschApi } from "@fern-api/explo";
import * as core from "../../../../core";

export const DeleteCustomerResponse: core.serialization.ObjectSchema<
    serializers.DeleteCustomerResponse.Raw,
    ZachkirschApi.DeleteCustomerResponse
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseResponse));

export declare namespace DeleteCustomerResponse {
    interface Raw extends serializers.BaseResponse.Raw {}
}