/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { Explo } from "@fern-api/explo";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Customer {
    interface Options {
        environment: string;
        token: core.Supplier<string>;
    }
}

export class Customer {
    constructor(private readonly options: Customer.Options) {}

    /**
     * This endpoint gets or creates a new customer. If the customer_id does
     * not exist, a new customer will be created and information about the
     * group will be sent back. If the customer_id exists, no action will be
     * taken but the same information about the group will be sent back. There
     * will be a flag in the response indicating if a new customer was created.
     *
     */
    public async getOrCreate(request: Explo.SetCustomerRequest): Promise<Explo.GetOrCreateCustomerResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/create_customer"),
            method: "POST",
            contentType: "application/json",
            body: await serializers.SetCustomerRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.GetOrCreateCustomerResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ExploError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ExploError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ExploTimeoutError();
            case "unknown":
                throw new errors.ExploError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint updates an existing customer. Currently, the only fields
     * you can update is the name and data_source field.
     *
     */
    public async update(request: Explo.SetCustomerRequest): Promise<Explo.UpdateCustomerResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/update_customer"),
            method: "POST",
            contentType: "application/json",
            body: await serializers.SetCustomerRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.UpdateCustomerResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ExploError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ExploError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ExploTimeoutError();
            case "unknown":
                throw new errors.ExploError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint deletes an existing Customer.
     */
    public async delete(request: Explo.DeleteCustomerRequest): Promise<Explo.DeleteCustomerResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/delete_customer"),
            method: "DELETE",
            contentType: "application/json",
            body: await serializers.DeleteCustomerRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.DeleteCustomerResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ExploError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ExploError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ExploTimeoutError();
            case "unknown":
                throw new errors.ExploError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint refreshes a customer token. This is useful when you want
     * to force a customer token to rotate because an existing one may be
     * compromised.
     *
     */
    public async refreshToken(request: Explo.RefreshCustomerTokenRequest): Promise<Explo.RefreshCustomerTokenResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/refresh_customer_token"),
            method: "POST",
            contentType: "application/json",
            body: await serializers.RefreshCustomerTokenRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.RefreshCustomerTokenResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ExploError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ExploError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ExploTimeoutError();
            case "unknown":
                throw new errors.ExploError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
