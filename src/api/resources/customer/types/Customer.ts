/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Customer {
    /**
     * This is Explo's internal ID for this customer. You don't need to
     * record this information, since you will not need to use it.
     *
     */
    teamId: number;
    /**
     * This is the customer token (customerToken or CUSTOMER_TOKEN) that will
     * be used to identify which customer is viewing the dashboard. You
     * should save this on your end to use when rendering an embedded
     * dashboard.
     *
     */
    token: string;
    /** This is the name of the customer provided in the request body. */
    name: string;
    /** This is the customer_id provided in the request body. */
    providedId: string;
    /** If set to true, data panels displayed for the customer will include a demo watermark. */
    isDemoGroup: boolean;
    /** This is the properties object if it was provided in the request body */
    properties?: unknown;
}
