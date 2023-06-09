/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Explo } from "@fern-api/explo";
import * as core from "../../../../core";

export const BaseResponse: core.serialization.ObjectSchema<serializers.BaseResponse.Raw, Explo.BaseResponse> =
    core.serialization.object({
        success: core.serialization.number(),
    });

export declare namespace BaseResponse {
    interface Raw {
        success: number;
    }
}
