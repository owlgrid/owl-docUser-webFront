/**
 * @maxItems 100
 */
export type AdministrationOrganizationsListResponse = {
    /**
     * The unique identifier for an organization
     */
    id: string;
    /**
     * The name of the organization in the format of 'organizations/*'
     */
    name?: string;
    /**
     * The human readable name of the organization
     */
    displayName?: string;
    /**
     * The time the organization object was created
     */
    created_at?: string;
    /**
     * The time the organization object was last updated
     */
    updated_at?: string;
    /**
     * A hash of key/value pairs that can be used to store additional information about the organization
     */
    metadata?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}[];

export interface GenericErrorResponse {
    operation: string;
    status: string;
    request_id: string;
    operation_id: string;
    response_id: string;
    error_id: string;
    metadata?: {
        message?: string;
        details?: {
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}

export interface AdministrationOrganizationsCreateRequest {
    /**
     * The human readable name of the organization
     */
    display_name?: string;
    /**
     * A hash of key/value pairs that can be used to store additional information about the organization
     */
    metadata?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}

export interface AdministrationOrganizationsGetResponse {
    /**
     * The unique identifier for an organization
     */
    id: string;
    /**
     * The name of the organization in the format of 'organizations/*'
     */
    name?: string;
    /**
     * The human readable name of the organization
     */
    display_name?: string;
    /**
     * The time the organization object was created
     */
    created_at?: string;
    /**
     * The time the organization object was last updated
     */
    updated_at?: string;
    /**
     * A hash of key/value pairs that can be used to store additional information about the organization
     */
    metadata?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
