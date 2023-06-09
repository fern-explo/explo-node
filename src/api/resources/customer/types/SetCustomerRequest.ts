/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SetCustomerRequest {
    /** This is the name of the customer. */
    name: string;
    /** This is the ID you use to identify this customer in your database. */
    customerId: string;
    /**
     * This is a JSON mapping of schema id to either the data source
     * that this user group should be associated with or id of the
     * datasource you provided when creating it.
     *
     */
    mapping: Record<string, string>;
    /**
     * Set this boolean parameter to true to make data panels include a
     * demo watermark for the customer. Demo customers do not count
     * towards paid user groups. Default value is false.
     *
     */
    isDemoGroup: boolean;
    /**
     * This is a JSON object for properties assigned to this customer.
     * These will be accessible through variables in the dashboards and
     * SQL editor
     *
     */
    properties?: unknown;
    /** This is an array of email addresses to add to the customer. */
    emails: string[];
}
